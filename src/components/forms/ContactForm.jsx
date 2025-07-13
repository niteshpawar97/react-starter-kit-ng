// src/components/forms/ContactForm.jsx

import Button from '../ui/Button';
import Input from '../ui/Input';
import Label from '../ui/Label';
import Textarea from '../ui/Textarea';
import { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Label>Name</Label>
        <Input
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Email</Label>
        <Input
          name="email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Subject</Label>
        <Input
          name="subject"
          type="text"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label>Message</Label>
        <Textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
};

export default ContactForm;
