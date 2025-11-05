import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative">
        <div
          className="flex min-h-[400px] flex-col gap-6 bg-cover bg-center bg-no-repeat items-center justify-center p-4 text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuC71wnbPfYxLyPiYNRlJmQxQ8_A7hsiq6uWO_OKuRk7OA12Dt1W_oY5BtJ0TFKmbjz_4HGzijHPy53RY_aTGXHhVg36saIkGr9YT5vTc8effVb1gsFozQqsnq7m0AcEAfh_OncoWcGxMpqhRSjXXRmp_vNDKOEhE3CBhTH0PHc0VgElMXpEoGDatCvNLDYqdomIEMhXlTrKg9kVpALPgYOHJMI_1Smk4a8UdoTJe0rfkNtqCWgcnpfJOhYMNF83diIkjDP9GyPpZgs")`,
          }}
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl">Get in Touch</h1>
            <p className="text-white text-sm font-normal leading-normal max-w-xl sm:text-base">
              We'd love to hear from you. Whether you have a question about our products, an order, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-10 lg:px-20 py-10 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column: Contact Info */}
            <div className="lg:col-span-2">
              <div className="flex flex-col gap-8">
                <div>
                  <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-3">Contact Information</h2>
                  <p className="text-subtle-text-light dark:text-subtle-text-dark">
                    Reach out to us through any of the channels below. We look forward to assisting you.
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <a href="mailto:support@tracie.com" className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <Mail className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold group-hover:text-primary transition-colors">Email Us</p>
                      <p className="text-sm text-subtle-text-light dark:text-subtle-text-dark">support@tracie.com</p>
                    </div>
                  </a>
                  <a href="tel:+1234567890" className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <Phone className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold group-hover:text-primary transition-colors">Call Us</p>
                      <p className="text-sm text-subtle-text-light dark:text-subtle-text-dark">+1 (234) 567-890</p>
                      <p className="text-xs text-subtle-text-light dark:text-subtle-text-dark">(9am-5pm EST, Mon-Fri)</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 size-10 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                      <MapPin className="text-primary h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold">Visit Us</p>
                      <p className="text-sm text-subtle-text-light dark:text-subtle-text-dark">
                        123 Fashion Ave, New York, NY 10001
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-surface-light dark:bg-surface-dark p-6 sm:p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] pb-1">Send Us a Message</h2>
                <p className="text-subtle-text-light dark:text-subtle-text-dark mb-6">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
                <form action="#" className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5" method="POST">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      type="text"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                      id="email"
                      name="email"
                      placeholder="email@example.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="subject">
                      Subject
                    </label>
                    <select
                      className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                      id="subject"
                      name="subject"
                    >
                      <option>Order Inquiry</option>
                      <option>Product Question</option>
                      <option>Feedback</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5" htmlFor="order-number">
                      Order Number (Optional)
                    </label>
                    <input
                      className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                      id="order-number"
                      name="order-number"
                      placeholder="#12345"
                      type="text"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium mb-1.5" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="block w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark focus:border-primary focus:ring-primary text-sm"
                      id="message"
                      name="message"
                      placeholder="Please describe your inquiry..."
                      rows={5}
                    ></textarea>
                  </div>
                  <div className="sm:col-span-2">
                    <button
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-opacity"
                      type="submit"
                    >
                      Submit Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
