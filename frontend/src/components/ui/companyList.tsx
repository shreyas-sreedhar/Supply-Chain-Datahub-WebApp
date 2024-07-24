import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import axios from 'axios';
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

interface Company {
  company_id: number;
  name: string;
  address: string;
}

const CompanyList = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [search, setSearch] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const router = useRouter();

  const api = axios.create({
    baseURL: 'http://localhost:8000/api',
  });

  const fetchCompanies = useCallback(async () => {
    try {
      const response = await api.get('/companies');
      setCompanies(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [api]);

  useEffect(() => {
    fetchCompanies();
  }, [fetchCompanies]);

  const handleSearch = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }, []);

  const navigateToDetails = useCallback((id: number) => {
    router.push(`/companies/${id}`);
  }, [router]);

  const filteredCompanies = useMemo(() => {
    return companies.filter(company =>
      company.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [companies, search]);

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">Companies</h2>
        </div>
        <div className="my-4">
          <input
            type="text"
            placeholder="Search by name"
            value={search}
            onChange={handleSearch}
            className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {filteredCompanies.map((company, idx) => (
            <Link
              href={`/companies/${company.company_id}`}
              key={company.company_id}
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-zinc-50 dark:bg-zinc-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.15 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15, delay: 0.2 },
                    }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{company.name}</CardTitle>
                <CardDescription>{company.address}</CardDescription>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-[#0000ff]/5 border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle = ({ className, children }: CardTitleProps) => {
  return (
    <h4 className={cn("text-[#0000ff] font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const CardDescription = ({ className, children }: CardDescriptionProps) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export default CompanyList;