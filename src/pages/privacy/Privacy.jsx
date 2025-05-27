import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className=" w-full md:w-3/4 p-6 font-sans">
        <h2 className="text-3xl font-bold text-primary mb-4">Privacy Policy</h2>
        <p className="font-semibold mb-6">Last Updated: January 27, 2025</p>

        <p className="mb-4">
          This Privacy Policy describes how <strong>Dream Craft Events</strong>{" "}
          (“we,” “our,” or “us”) collects, uses, processes, and shares your
          information when you use our website, mobile application, or any
          related services.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          1. Who We Are
        </h3>
        <p className="mb-4">
          <strong>Dream Craft Events</strong> is an event management and
          ticketing platform that helps organizers create, promote, and manage
          events. Our services are available through our website and apps.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          2. Scope of This Policy
        </h3>
        <p className="mb-4">
          This policy applies to all users of{" "}
          <strong>Dream Craft Events</strong> including event organizers,
          attendees, and visitors to our site.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          3. Information We Collect
        </h3>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>
            <strong>Personal Information:</strong> Name, email, phone number,
            payment details, etc.
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, device type,
            browser, and usage patterns.
          </li>
          <li>
            <strong>Cookies:</strong> We use cookies and similar tracking
            technologies for analytics and personalization.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          4. How We Use Your Information
        </h3>
        <p>We use your data to:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Provide and improve our services</li>
          <li>Process transactions and send confirmations</li>
          <li>Communicate with you about your account or events</li>
          <li>Send marketing and promotional materials (if you opt in)</li>
        </ul>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          5. Sharing Your Information
        </h3>
        <p>We may share your information with:</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Event organizers (if you buy a ticket)</li>
          <li>Service providers who help us operate the platform</li>
          <li>Legal authorities if required by law</li>
        </ul>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          6. Your Rights
        </h3>
        <p className="mb-4">
          You may have rights under data protection laws, including to access,
          correct, or delete your data. Contact us at{" "}
          <a
            href="mailto:privacy@dreamcraftevents.com"
            className="text-primary underline"
          >
            privacy@dreamcraftevents.com
          </a>{" "}
          to make a request.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          7. Data Security
        </h3>
        <p className="mb-4">
          We use industry-standard measures to protect your data, but no system
          is 100% secure.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          8. Changes to This Policy
        </h3>
        <p className="mb-4">
          We may update this policy occasionally. When we do, we’ll update the
          “Last Updated” date above.
        </p>

        <h3 className="text-xl font-semibold text-primary mt-6 mb-2">
          9. Contact Us
        </h3>
        <p>
          If you have questions, please email us at{" "}
          <a
            href="mailto:privacy@dreamcraftevents.com"
            className="text-primary underline"
          >
            privacy@dreamcraftevents.com
          </a>
          .
        </p>
      </div>
      <div className="w-full md:w-1/4 p-6 font-sans ">
        <div className="border border-primary p-5">
          <div className="flex items-center gap-4">
            <IoPersonSharp className="text-6xl" />
            <div>
              <h2 className="text-primary text-xl font-semibold">
                Get help faster
              </h2>
              <p>
                Log in for resources tailored to your account, tickets, and
                events.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-evenly mt-4">
            <Link
              className="text-xl  bg-primary border text-white px-4 py-2 rounded-xl"
              to="/contact"
            >
              Contact
            </Link>
            <Link
              className="text-xl  bg-primary border text-white px-4 py-2 rounded-xl"
              to="/login"
            >
              LogIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
