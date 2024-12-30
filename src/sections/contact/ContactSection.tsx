import SectionHeading from '@/components/sectionHeading/SectionHeading';
import classes from './ContactSection.module.css';
import { BsSendFill } from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import { FormEvent, useState } from 'react';
import Notification from '@/components/Notification';
import { motion } from 'framer-motion';
import { data } from '@/lib/data';
import useSectionInView from '@/lib/hooks';

const ContactSection = () => {
  const { ref } = useSectionInView('Contact', 0.6);
  const [isSending, setIsSending] = useState(false);
  const notification = new Notification();
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setIsSending(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        e.currentTarget,
        import.meta.env.VITE_EMAIL_KEY
      );

      notification.showSuccess('Message sent successfully');
      setIsSending(false);
    } catch {
      notification.showError(
        'An error occured while sending the email, please try again.'
      );
    }
  }
  return (
    <section id='contact' className={classes.container} ref={ref}>
      <SectionHeading title='Contact' />
      <motion.div className={classes.contactContainer}>
        <ul className={classes.infoContainer}>
          {data.contactInfo.map((info) => (
            <li className={classes.inputContainer} key={info.text}>
              {info.icon}
              <p>{info.text}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className={classes.formContainer}>
          <input
            className={classes.input}
            type='email'
            required
            name='email'
            placeholder='Your Email'
          />

          <input
            className={classes.input}
            type='text'
            name='subject'
            required
            placeholder='Your Subject'
          />
          <textarea
            className={`${classes.input} ${classes.textarea}`}
            required
            name='message'
            placeholder='Your Message'
          />
          <button type='submit' className={classes.btnSubmit}>
            {isSending && 'Sending...'}
            {!isSending && (
              <>
                Submit <BsSendFill className='send__icon' />
              </>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
