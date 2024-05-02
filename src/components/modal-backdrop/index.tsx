'use client';

import { useRouter } from 'next/navigation';

import styles from './index.module.css';


export default function ModalBackdrop() {
  const router = useRouter();
  return <div className={styles['modal-backdrop']} onClick={router.back} />
}