import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does PixelForge Studio compare to Adobe Creative Suite?",
      answer: `PixelForge Studio offers professional-grade editing capabilities directly in your browser, eliminating the need for expensive hardware upgrades and complex installations. Unlike Adobe's desktop-only approach, we provide seamless cross-device continuity, real-time collaboration, and AI-powered automation that significantly reduces editing time. Our cloud-based architecture means automatic updates, universal access, and no storage limitations on your local devices.`
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: `Yes, you can cancel your subscription at any time with no cancellation fees. Your access will continue until the end of your current billing period, and you'll retain access to your projects and exports. We also offer a 30-day money-back guarantee for new subscribers who aren't completely satisfied with their experience.`
    },
    {
      question: "What happens to my projects if I downgrade or cancel?",
      answer: `Your projects remain accessible even after downgrading or canceling. Free plan users can access and export their projects with standard quality limits. All project files are stored securely in the cloud for 90 days after cancellation, giving you time to export or upgrade if needed. Premium assets and advanced features will be locked but your core project data remains intact.`
    },
    {
      question: "Do you offer educational discounts?",
      answer: `Yes! We offer 50% discounts for students and educators with valid academic credentials. Educational institutions can also access special volume pricing for classroom licenses. Contact our education team for custom packages that include curriculum integration and teacher training resources.`
    },
    {
      question: "How does team collaboration work?",
      answer: `Team plans enable real-time collaborative editing where multiple users can work on the same project simultaneously. You'll see live cursors, instant updates, and can leave comments directly on design elements. Version control automatically tracks changes, and admin controls let you manage permissions, brand assets, and team workflows from a centralized dashboard.`
    },
    {
      question: "What kind of customer support do you provide?",
      answer: `Support varies by plan: Free users access community forums and documentation. Pro users get email support with 24-hour response times. Team plans include priority support with 4-hour response times. Enterprise customers receive dedicated account management, phone support, and custom training sessions. All plans include access to our comprehensive video tutorial library.`
    },
    {
      question: "Can I use PixelForge Studio offline?",
      answer: `Our Progressive Web App (PWA) enables basic editing capabilities offline, including photo adjustments, cropping, and filter applications. Advanced features like AI processing and collaboration require internet connectivity. Projects sync automatically when you're back online, ensuring no work is lost during offline sessions.`
    },
    {
      question: "What file formats do you support?",
      answer: `We support all major image formats (JPEG, PNG, TIFF, WebP, HEIC), RAW files from major camera manufacturers, vector formats (SVG, AI), and video formats (MP4, MOV, WebM). Export options include web-optimized formats, print-ready files, and platform-specific sizes for social media. Enterprise plans include additional format support and custom export presets.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {faqs?.map((faq, index) => (
        <div
          key={index}
          className="bg-card border border-border rounded-xl overflow-hidden transition-all duration-200 hover:shadow-creative-sm"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/20 transition-colors"
          >
            <h3 className="font-semibold text-card-foreground pr-4">{faq?.question}</h3>
            <Icon
              name="ChevronDown"
              size={20}
              className={`text-text-secondary transition-transform duration-200 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <div className={`transition-all duration-200 ${
            openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}>
            <div className="px-6 pb-6">
              <p className="text-text-secondary leading-relaxed">{faq?.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;