import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setToast({ show: false, message: '', type: '' });

    emailjs.sendForm(
      'service_yrzl2gs',
      'template_bp5cpqw',
      form.current,
      '0gSA9jtS05nB9vU_C'
    )
      .then((result) => {
        showToast('Message sent successfully!', 'success');
        form.current.reset();
      })
      .catch((error) => {
        showToast('Failed to send message. Please try again.', 'error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="col-span-12 row-span-9 flex justify-center items-center max-lg:col-span-full max-lg:grid-rows-none max-lg:gap-4">
      <div className="col-span-full bg-bison_hide border-bison_hide rounded-xl p-6 relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5 mx-auto">
        <div className="mx-auto mt-1 h-fit">
          <div className="border-2 w-1/2 lg:w-1/3 ml-4 h-10 rounded-full border-[#06141B] bg-bison_hide text-[#06141B] pl-5 font-heading font-serif">
            <strong className="text-xl md:text-2xl lg:text-2xl font-heading font-serif">Contact Me</strong>
          </div>
          <div className="border-2 border-[#06141B] w-full mx-auto mt-2 h-fit pt-6 px-4 rounded-2xl bg-bison_hide">
            <p className="text-[#06141B] text-xl mb-6 px-2 font-heading font-serif">
              You can contact me through completing this form
            </p>
            <form ref={form} onSubmit={sendEmail}>
              <label htmlFor="name" className="mx-2 text-3xl lg:text-2xl font-heading font-serif text-[#06141B]">Name :</label>
              <br />
              <input 
                id="name" 
                placeholder="name" 
                className="border-[#06141B] bg-bison_hide text-[#06141B] mx-2 mb-5 p-2 text-xl xl:text-2xl font-heading font-serif rounded-xl w-10/11 lg:w-1/2" 
                type="text" 
                name="user_name"
                required
              />
              <br />
              <label htmlFor="email" className="mx-2 text-3xl lg:text-2xl font-heading font-serif text-[#06141B]">Email :</label>
              <br />
              <input 
                id="email" 
                placeholder="email" 
                className="border-[#06141B] bg-bison_hide text-[#06141B] mx-2 mb-5 p-2 text-xl xl:text-2xl font-heading font-serif rounded-xl w-10/11 lg:w-1/2" 
                type="email" 
                name="user_email"
                required
              />
              <br />
              <label htmlFor="message" className="mx-2 text-3xl lg:text-2xl font-heading font-serif text-[#06141B]">Message :</label>
              <br />
              <textarea 
                id="message" 
                placeholder="type something..." 
                className="border-[#06141B] bg-bison_hide text-[#06141B] mx-2 mb-5 p-2 text-xl xl:text-2xl font-heading font-serif rounded-xl w-10/11 lg:w-1/2 h-32 resize-none" 
                name="message"
                required
              />
              <br />
              <button 
                className={`bg-armadillo text-[#e5decd] w-40 h-12 rounded-xl text-2xl text-center font-heading font-serif mx-2 mb-4 transition-colors duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:cursor-pointer hover:bg-soya_bean'
                }`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Contact Me'}
              </button>
            </form>
          </div>
        </div>
        {/* Social media icons */}
        <div className="absolute bottom-8 right-10 flex gap-6 hidden md:flex">
          <a href="https://twitter.com/SameerS73068018" target="_blank" rel="noopener noreferrer" title="Twitter">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#4F493F"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
          </a>
          <a href="https://github.com/SameerSinghal26" target="_blank" rel="noopener noreferrer" title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#4F493F"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.804 8.207 11.385.6.113.818-.262.818-.577l-.012-2.215c-3.32-.72-4.01-1.612-4.01-1.612-.544-1.388-1.327-1.758-1.327-1.758-1.087-.731.084-.716.084-.716 1.205.086 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.493 1.002.108-.777.418-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.235-3.221-.125-.304-.535-1.524.118-3.176 0 0 1-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.287-1.23 3.287-1.23.654 1.652.244 2.872.12 3.176.77.84 1.232 1.911 1.232 3.221 0 4.61-2.806 5.624-5.479 5.923.43.372.823 1.102.823 2.222l-.014 3.264c0 .315.216.695.824.577C20.565 21.808 24 17.302 24 12 24 5.373 18.627 0 12 0z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/sameersinghal26" target="_blank" rel="noopener noreferrer" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#4F493F"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.529-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.instagram.com/sam_sober_/" target="_blank" rel="noopener noreferrer" title="Instagram">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#4F493F"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-2.252 3.252-1.691 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.85 2.252-3.252 1.691-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.354.2-6.78 2.525-7.005 6.849-.057 1.28-.071 1.689-.071 4.947 0 3.259.014 3.668.072 4.947.2 4.354 2.525 6.78 6.849 7.005 1.28.057 1.689.071 4.947.071 3.259 0 3.668-.014 4.947-.072 4.354-.2 6.78-2.525 7.005-6.849.057-1.28.071-1.689.071-4.947 0-3.259-.014-3.667-.072-4.947-.2-4.354-2.525-6.78-6.849-7.005-1.28-.057-1.689-.071-4.947-.071zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.444.647-1.444 1.443s.647 1.443 1.444 1.443c.796 0 1.443-.647 1.443-1.443s-.647-1.443-1.443-1.443z"/></svg>
          </a>
        </div>
      </div>
      {toast.show && (
        <div className={`fixed top-22 right-4 p-4 rounded-lg shadow-lg z-50 transition-opacity duration-300 ${toast.type === 'success' ? ' bg-armadillo text-black' : 'bg-bison_hide text-black'}`}>
          {toast.message}
        </div>
      )}
    </div>
  )
}

export default Contact