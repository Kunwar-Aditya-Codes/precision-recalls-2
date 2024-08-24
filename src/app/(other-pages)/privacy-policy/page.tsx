'use client';

const Page = () => {
  return (
    <>
      <h1 className='text-4xl text-dark-blue font-bold mt-8'>Privacy Policy</h1>
      <p className='mt-4 text-lg text-justify'>
        At Flintz, we value your privacy and are committed to protecting your
        personal information. This policy outlines how we collect, use, and
        safeguard the data you share with us.
      </p>
      <div className='mt-6 flex flex-col gap-y-4'>
        <div className=''>
          <span className='font-bold text-lg'> 1. Information We Collect:</span>
          <p>
            We may collect personal information such as your name, email
            address, contact details, and any other data you provide when you
            interact with our website or services. This helps us improve our
            services and ensure a seamless experience.
          </p>
        </div>
        <div>
          <span className='font-bold text-lg'>
            {' '}
            2. How We Use Your Information:
          </span>
          <p>
            Your information is used solely to enhance our services, personalise
            your experience, and communicate effectively with you. We do not
            sell or share your data with third parties without your consent.
          </p>
        </div>
        <div>
          <span className='font-bold text-lg'>3. Data Security:</span>
          <p>
            We take the security of your data seriously. Flintz employs
            industry-standard security measures to protect your information from
            unauthorised access, disclosure, or misuse.
          </p>
        </div>
        <div>
          <span className='font-bold text-lg'> 4. Cookies:</span>
          <p>
            Our website uses cookies to improve functionality and enhance your
            browsing experience. You have the option to manage cookie
            preferences through your browser settings.
          </p>
        </div>
        <div>
          <span className='font-bold text-lg'>5. Your Rights:</span>
          <p>
            You have the right to access, update, or request the deletion of
            your personal information at any time. If you have any questions or
            concerns, feel free to reach out to us.
          </p>
        </div>
        <div>
          <span className='font-bold text-lg'>6. Updates to This Policy:</span>
          <p>
            We may update our privacy policy from time to time. Any changes will
            be reflected here, so we encourage you to review this page
            periodically.
          </p>
        </div>
      </div>
      <p className='mt-6 font-medium'>
        Contact Us: If you have any questions or need further information,
        please contact us at{' '}
        <span className='text-blue-500'>contact@flintz.in</span>. Your trust is
        important to us, and we&apos;re here to ensure your data remains safe
        and secure.
      </p>
    </>
  );
};
export default Page;
