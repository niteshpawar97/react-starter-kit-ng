// src/pages/ContactPage.jsx

import ContactForm from '../components/forms/ContactForm';

const ContactPage = () => {
  const handleContactSubmit = (data) => {
    console.log('Form data received:', data);
    // You can send this to API or show a toast
  };

  return (
    <div className="min-h-screen bg-light dark:bg-dark text-dark dark:text-light flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-gray-900 shadow-lg rounded-2xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-primary">📨 Contact Us</h2>
        <ContactForm onSubmit={handleContactSubmit} />
      </div>
    </div>
  );
};

export default ContactPage;
