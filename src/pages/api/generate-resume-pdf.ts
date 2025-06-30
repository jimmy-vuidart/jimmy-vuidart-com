// src/pages/api/generate-resume-pdf.ts
import type { APIRoute } from 'astro';
import PDFDocument from 'pdfkit';
import { resumeData } from '../../shared/data/resume-data.ts';

export const GET: APIRoute = async () => {
  try {
    // Create a PDF document
    const doc = new PDFDocument({
      size: 'A4',
      margin: 50,
      info: {
        Title: `${resumeData.name} - Resume`,
        Author: resumeData.name,
        Subject: 'Professional Resume',
        Keywords: 'resume, cv, professional, web developer'
      }
    });

    // Buffer to store PDF data
    const chunks: Buffer[] = [];
    doc.on('data', (chunk) => chunks.push(chunk));

    // Promise to resolve when PDF is complete
    const pdfPromise = new Promise<Buffer>((resolve) => {
      doc.on('end', () => {
        const pdfBuffer = Buffer.concat(chunks);
        resolve(pdfBuffer);
      });
    });

    // Define colors
    const colors = {
      indigo: '#4f46e5',
      indigoLight: '#6366f1',
      gray: '#374151',
      grayLight: '#6b7280',
      grayDark: '#111827',
      grayBg: '#f9fafb',
      border: '#e5e7eb'
    };

    // Helper function to add a section title
    const addSectionTitle = (title: string) => {
      doc.fontSize(16)
         .font('Helvetica-Bold')
         .fillColor(colors.indigo)
         .text(title, { continued: false })
         .moveDown(0.2);

      // Add a line under the title
      doc.moveTo(50, doc.y)
         .lineTo(150, doc.y)
         .strokeColor(colors.indigo)
         .lineWidth(2)
         .stroke();

      doc.moveDown(0.5);
    };

    // Helper function to add a content box
    const addContentBox = (content: () => void) => {
      // Save current position
      const startY = doc.y;

      // Move down slightly to create space for the box
      doc.moveDown(0.5);

      // Execute content function to add content
      content();

      // Move down to create space after the box
      doc.moveDown(1);
    };

    // Add header with name and title
    doc.fontSize(24)
       .font('Helvetica-Bold')
       .fillColor(colors.grayDark)
       .text(resumeData.name, { align: 'center' })
       .fontSize(16)
       .fillColor(colors.indigo)
       .text(resumeData.title, { align: 'center' })
       .moveDown(0.2);

    // Add contact information
    doc.fontSize(10)
       .fillColor(colors.grayLight)
       .text(`Email: ${resumeData.contact.email} | Phone: ${resumeData.contact.phone} | ${resumeData.contact.location}`, { align: 'center' })
       .moveDown(1);

    // Add a line under the header
    doc.moveTo(50, doc.y)
       .lineTo(doc.page.width - 50, doc.y)
       .strokeColor(colors.border)
       .lineWidth(1)
       .stroke()
       .moveDown(1);

    // Professional Summary
    addSectionTitle('Professional Summary');
    addContentBox(() => {
      doc.fontSize(12)
         .font('Helvetica')
         .fillColor(colors.gray)
         .text(resumeData.professionalSummary, { align: 'left' });
    });

    // Work Experience
    addSectionTitle('Work Experience');
    resumeData.workExperience.forEach((job, index) => {
      // Check if we need a new page
      if (doc.y > doc.page.height - 150) {
        doc.addPage();
      }

      addContentBox(() => {
        doc.fontSize(14)
           .font('Helvetica-Bold')
           .fillColor(colors.grayDark)
           .text(job.title)
           .fontSize(12)
           .font('Helvetica')
           .fillColor(colors.indigo)
           .text(job.company)
           .fontSize(10)
           .fillColor(colors.grayLight)
           .font('Helvetica-Oblique')
           .text(job.period)
           .moveDown(0.5)
           .fontSize(12)
           .font('Helvetica')
           .fillColor(colors.gray)
           .text(job.description);

        if (job.achievements.length > 0) {
          doc.moveDown(0.5)
             .font('Helvetica-Bold')
             .text('Key Achievements:')
             .font('Helvetica');

          job.achievements.forEach((achievement, i) => {
            doc.moveDown(0.2)
               .fontSize(12)
               .fillColor(colors.gray)
               .text(`• ${achievement}`, { indent: 10 });
          });
        }
      });
    });

    // Education
    addSectionTitle('Education');
    resumeData.education.forEach((edu) => {
      // Check if we need a new page
      if (doc.y > doc.page.height - 150) {
        doc.addPage();
      }

      addContentBox(() => {
        doc.fontSize(14)
           .font('Helvetica-Bold')
           .fillColor(colors.grayDark)
           .text(edu.degree)
           .fontSize(12)
           .font('Helvetica')
           .fillColor(colors.indigo)
           .text(edu.institution)
           .fontSize(10)
           .fillColor(colors.grayLight)
           .font('Helvetica-Oblique')
           .text(edu.period)
           .moveDown(0.5)
           .fontSize(12)
           .font('Helvetica')
           .fillColor(colors.gray)
           .text(edu.description);
      });
    });

    // Skills
    addSectionTitle('Skills');
    addContentBox(() => {
      resumeData.skills.forEach((skillGroup) => {
        // Check if we need a new page
        if (doc.y > doc.page.height - 100) {
          doc.addPage();
        }

        doc.fontSize(12)
           .font('Helvetica-Bold')
           .fillColor(colors.grayDark)
           .text(skillGroup.category)
           .moveDown(0.2)
           .fontSize(12)
           .font('Helvetica')
           .fillColor(colors.gray)
           .text(skillGroup.items.join(', '))
           .moveDown(0.5);
      });
    });

    // Certifications
    addSectionTitle('Certifications');
    addContentBox(() => {
      resumeData.certifications.forEach((cert) => {
        // Check if we need a new page
        if (doc.y > doc.page.height - 100) {
          doc.addPage();
        }

        doc.fontSize(12)
           .font('Helvetica-Bold')
           .fillColor(colors.grayDark)
           .text(cert.title)
           .fontSize(10)
           .font('Helvetica-Oblique')
           .fillColor(colors.grayLight)
           .text(`${cert.issuer} (${cert.date})`)
           .moveDown(0.5);
      });
    });

    // Add footer with page numbers
    const totalPages = doc.bufferedPageRange().count;
    for (let i = 1; i < totalPages; i++) {
      doc.switchToPage(i);

      // Add footer text
      doc.fontSize(10)
         .fillColor(colors.grayLight)
         .text(
           `Resume of ${resumeData.name} - Generated on ${new Date().toLocaleDateString()}`,
           50,
           doc.page.height - 50,
           { align: 'center' }
         );

      // Add page number
      doc.text(
        `Page ${i + 1} of ${totalPages}`,
        50,
        doc.page.height - 30,
        { align: 'center' }
      );
    }

    // Finalize the PDF
    doc.end();

    // Wait for PDF to be generated
    const pdfBuffer = await pdfPromise;

    // Return the PDF as a response
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'inline; filename="jimmy-vuidart-resume.pdf"'
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate PDF' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
