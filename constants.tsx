
import React from 'react';
import { Home, Building2, Hammer, Ruler, HardHat, FileCheck } from 'lucide-react';
import { NavItem, Service } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'res-const',
    title: 'Residential Construction',
    description: 'New homes and additions with dependable timelines and clear communication from start to finish.',
    icon: <Home className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'remodel',
    title: 'Home Remodeling',
    description: 'Kitchens, baths, and whole-home remodels—we keep you informed so there are no surprises.',
    icon: <Hammer className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'comm-build',
    title: 'Commercial Build Outs',
    description: 'Tenant improvements and small commercial spaces for business owners who need it done right.',
    icon: <Building2 className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'design-build',
    title: 'Design-Build Services',
    description: 'One team from concept to completion—streamlined delivery and a single point of contact.',
    icon: <Ruler className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'structural',
    title: 'Structural & Concrete',
    description: 'Foundations and structural work built to last—the backbone of every solid project.',
    icon: <FileCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'mgmt',
    title: 'Project Management',
    description: 'We keep your project on schedule and on budget so you can focus on what’s next.',
    icon: <HardHat className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800'
  }
];

export const COMPANY_DETAILS = {
  name: 'IronPeak Construction Group',
  founded: 2014,
  location: 'San Jose, California',
  phone: '(408) 555-0198',
  email: 'build@ironpeakbuilders.com',
  serviceArea: ['San Jose', 'Santa Clara', 'Sunnyvale', 'Palo Alto', 'Fremont']
};
