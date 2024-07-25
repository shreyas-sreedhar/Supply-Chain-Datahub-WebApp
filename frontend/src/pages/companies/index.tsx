import { useEffect } from 'react';
import { useRouter } from 'next/router';

const CompaniesRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, [router]);

  return null; // Render nothing while redirecting
};

export default CompaniesRedirect;