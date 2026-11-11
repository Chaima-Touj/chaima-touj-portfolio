export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Partial<Record<keyof ContactFormData, string>>;
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateContactForm(data: ContactFormData): ValidationResult {
  const errors: Partial<Record<keyof ContactFormData, string>> = {};

  const name = data.name.trim();
  if (!name) {
    errors.name = 'Please enter your name.';
  } else if (name.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  } else if (name.length > 80) {
    errors.name = 'Name is too long (max 80 characters).';
  }

  const email = data.email.trim();
  if (!email) {
    errors.email = 'Please provide an email address.';
  } else if (!validateEmail(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  const subject = data.subject.trim();
  if (!subject) {
    errors.subject = 'Please specify a subject.';
  } else if (subject.length < 3) {
    errors.subject = 'Subject must be at least 3 characters.';
  }

  const message = data.message.trim();
  if (!message) {
    errors.message = 'Please write a message.';
  } else if (message.length < 10) {
    errors.message = 'Message must be at least 10 characters so I can understand your project.';
  } else if (message.length > 2000) {
    errors.message = 'Message is too long (max 2000 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
