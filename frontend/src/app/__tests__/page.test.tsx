// src/app/__tests__/page.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../page';
// import f from '../../components/'

jest.mock('../../components/ui/companyList', () => {
  return function DummyCompanyList() {
    return <div data-testid="company-list">Mocked Company List</div>;
  };
});

jest.mock('../../components/ui/navBar', () => {
  return function DummyNavBar() {
    return <div data-testid="nav-bar">Mocked Nav Bar</div>;
  };
});

describe('Home', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it('renders a heading', () => {
    render(<Home />);
    const heading = screen.getByText(/Discover the list of companies and their details./i);
    expect(heading).toBeInTheDocument();
  });

  it('renders the NavBar component', () => {
    render(<Home />);
    expect(screen.getByTestId('nav-bar')).toBeInTheDocument();
  });

  it('renders the CompanyList component', () => {
    render(<Home />);
    expect(screen.getByTestId('company-list')).toBeInTheDocument();
  });
});