import { ComponentSchema } from '../../types/schemas';

export const FAQItemSchema: ComponentSchema = {
  type: 'FAQItem',
  description: 'Expandable FAQ item with question and answer',
  properties: {
    question: {
      type: 'string',
      description: 'The FAQ question',
    },
    answer: {
      type: 'string',
      description: 'The FAQ answer (can be plain text or HTML)',
    },
    defaultOpen: {
      type: 'boolean',
      default: false,
      description: 'Whether the item starts expanded',
    },
  },
  required: ['question', 'answer'],
  examples: [
    {
      question: 'What are your consultation fees?',
      answer: 'Initial consultations are free. Subsequent sessions are $150/hour.',
    },
    {
      question: 'Do you offer emergency services?',
      answer: 'Yes, we provide 24/7 emergency services for existing clients.',
      defaultOpen: true,
    },
  ],
  aiGuidelines: `
    FAQItem Usage Guidelines for AI:

    1. WHEN TO USE:
       - Common questions from potential clients
       - Service details and explanations
       - Pricing and payment information
       - Process and procedure explanations
       - Qualification and credential questions

    2. QUESTION WRITING:
       - Write from customer perspective ("Do you...", "What is...")
       - Keep concise (5-15 words)
       - Address real concerns
       - Use natural language

    3. ANSWER WRITING:
       - Be clear and direct
       - 1-3 paragraphs ideal
       - Include specifics (times, prices, locations)
       - Add links when relevant
       - Use conversational tone

    4. PROFESSIONAL CONTEXTS:

       LAWYERS:
       Q: "What types of cases do you handle?"
       Q: "What are your fees?"
       Q: "How long does a case typically take?"
       Q: "Do you offer free consultations?"

       DOCTORS/HEALTHCARE:
       Q: "Do you accept my insurance?"
       Q: "How do I schedule an appointment?"
       Q: "What should I bring to my first visit?"
       Q: "Do you offer telemedicine?"

       CONSULTANTS:
       Q: "What is your consulting process?"
       Q: "How do you charge for services?"
       Q: "What industries do you work with?"
       Q: "How long is a typical engagement?"

       SERVICES/BUSINESSES:
       Q: "What areas do you serve?"
       Q: "Do you offer guarantees?"
       Q: "How quickly can you start?"
       Q: "What makes you different?"

    5. ORDERING:
       - Most important/common questions first
       - Group related questions together
       - Pricing questions together
       - Process questions together

    6. DEFAULT OPEN:
       - Use for most critical 1-2 questions
       - First question often defaultOpen
       - Most common concern

    Do NOT:
    - Write overly long answers (use separate page)
    - Use jargon without explanation
    - Avoid difficult questions
    - Provide incomplete information
  `,
};
