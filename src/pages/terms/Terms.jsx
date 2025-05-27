import { IoPersonSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-3/4 p-6 font-sans">
        <h1 className="text-4xl font-bold text-primary mb-6 ">
          Terms & Conditions
        </h1>

        <p className="mb-4">
          Welcome to <strong>Dream Craft Events</strong>. By accessing or using
          our services, you agree to be bound by these terms and conditions.
          Please read them carefully.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Services</h2>
        <p className="mb-4">
          Dream Craft Events provides event planning, coordination, and
          management services. The scope of services will be outlined in your
          specific agreement or proposal.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Booking and Payments
        </h2>
        <p className="mb-4">
          A non-refundable deposit is required to secure your event date. The
          full payment schedule will be provided at the time of booking.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cancellations</h2>
        <p className="mb-4">
          In case of cancellation, please notify us as early as possible.
          Cancellations made less than 30 days before the event may be subject
          to partial or full charges.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. Client Responsibilities
        </h2>
        <p className="mb-4">
          Clients are responsible for providing accurate event details and
          timely communication. Delays caused by inaccurate information may
          affect the quality of service.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Liability</h2>
        <p className="mb-4">
          Dream Craft Events will not be held liable for any damages or losses
          resulting from unforeseen circumstances, third-party vendors, or force
          majeure events.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, branding, designs, and media produced by Dream Craft
          Events remain our intellectual property unless otherwise stated.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Modifications</h2>
        <p className="mb-4">
          We reserve the right to update these terms at any time. Continued use
          of our services after any changes indicates your agreement to the
          revised terms.
        </p>

        <p className="mt-10 text-sm text-center text-gray-500">
          © {new Date().getFullYear()} Dream Craft Events. All rights reserved.
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

export default Terms;
