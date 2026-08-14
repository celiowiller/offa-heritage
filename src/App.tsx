import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './app/layout';
import { HomePage } from './app/page';
import { AboutPage } from './app/about/page';
import { TeamPage } from './app/team/page';
import { ProjectsPage } from './app/projects/page';
import { StreetsListPage } from './app/streets/page';
import { StreetDetailPage } from './app/streets/[slug]/page';
import { ReportPage } from './app/report/page';
import { ContactPage } from './app/contact/page';

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/streets" element={<StreetsListPage />} />
          <Route path="/streets/:slug" element={<StreetDetailPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}