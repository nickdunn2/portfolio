const Footer = () => {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="block mb-2 text-xs">
        &copy; {new Date().getFullYear()} Nick Dunn. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span>
        {" "}Built with React, Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend. Hosted with Vercel.
      </p>
    </footer>
  )
}

export default Footer
