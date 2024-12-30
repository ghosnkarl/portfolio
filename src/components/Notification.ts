import { Id, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification {
  toastId: Id | null = null;

  constructor(text?: string) {
    if (text) {
      this.toastId = toast.info(text);
    }
  }

  showInfo(text: string) {
    if (!this.toastId || !toast.isActive(this.toastId)) {
      toast.info(text);
    } else {
      toast.update(this.toastId, {
        render: text,
        type: 'info',
      });
    }
  }

  showSuccess(text: string) {
    if (!this.toastId || !toast.isActive(this.toastId)) {
      this.toastId = toast.success(text);
    } else {
      toast.update(this.toastId, {
        render: text,
        type: 'success',
      });
    }
  }

  showError(text: string) {
    if (!this.toastId || !toast.isActive(this.toastId)) {
      this.toastId = toast.error(text);
    } else {
      toast.update(this.toastId, {
        render: text,
        type: 'error',
      });
    }
  }
}

export default Notification;
