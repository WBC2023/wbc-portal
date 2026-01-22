import React, { useState } from 'react';
import { AppSection } from './types';
import { Layout } from './Layout';
import { 
  CLAIM_REQUIREMENTS, 
  SERVICE_FORMS, 
  DOWNLOAD_CENTRE, 
  FAQ_DATA, 
  COMPANY_INFO 
} from './constants';

const Home: React.FC<{ onNavigate: (s: AppSection) => void }> = ({ onNavigate }) => (
  <div className="space-y-12">
    {/* Hero */}
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-slate-900">
      <img src="https://picsum.photos/seed/wealth/1920/1080" alt="Insurance Hero" className="absolute inset-0 w-full h-full object-cover opacity-40" />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Build Wealth, <span className="text-red-500">Secure Futures</span></h1>
        <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
          Wealth Build Consulting provides expert administrative support and consultation for your insurance needs. From claims to portal registration, we've got you covered.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={() => onNavigate(AppSection.CLAIMS)} className="bg-red-600 text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl">Submit a Claim</button>
          <button onClick={() => onNavigate(AppSection.ECONNECT)} className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-slate-100 transition-all">Portal User Guide</button>
        </div>
      </div>
    </section>

    {/* Quick Stats/Cards */}
    <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-16 relative z-20">
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-3">Claims Support</h3>
        <p className="text-slate-500 text-sm">Step-by-step guidance on all major insurance claim types to ensure smooth processing.</p>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 20a10.003 10.003 0 006.235-2.509l.054.09m-3.44 2.04C13.101 16.799 12.092 13.517 12 10m-3.44 2.04c.054.09.11.178.168.265m7.144-4.61c.058.087.114.175.168.265M9.172 9.172a4 4 0 115.656 5.656m-5.656-5.656l5.656 5.656" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-3">eConnect Guide</h3>
        <p className="text-slate-500 text-sm">Comprehensive manuals for Great ID registration, ePay, and online policy management.</p>
      </div>
      <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 text-center">
        <div className="w-16 h-16 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
        </div>
        <h3 className="text-xl font-bold mb-3">AI Consultation</h3>
        <p className="text-slate-500 text-sm">Get instant answers to your insurance questions from our Gemini-powered smart assistant.</p>
      </div>
    </section>
  </div>
);

const ClaimsPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">Claim Submission Requirements</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {CLAIM_REQUIREMENTS.map((claim, idx) => (
        <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-red-600 mb-4">{claim.type}</h3>
          <ul className="space-y-3">
            {claim.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const ServicePage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">Customer Service Forms Guide</h2>
    <div className="overflow-hidden bg-white border border-slate-200 rounded-3xl shadow-sm">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Type of Service Request</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Required Form</th>
            <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Notes</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {SERVICE_FORMS.map((form, idx) => (
            <tr key={idx} className="hover:bg-slate-50 transition-colors">
              <td className="px-6 py-4 text-sm font-medium text-slate-900">{form.requestType}</td>
              <td className="px-6 py-4 text-sm text-red-600 font-semibold">{form.formName}</td>
              <td className="px-6 py-4 text-sm text-slate-500 italic">{form.notes || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const EConnectPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">eConnect Portal User Guide</h2>
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-2xl font-bold mb-4">1. Great ID Registration</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Great ID is a single digital account for all Great Eastern services. To register, visit the eConnect web portal and click "Register Now". Verify your identity using NRIC and Policy Number, then set up your credentials.
          </p>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <h4 className="font-bold text-red-800 mb-2 italic">Password Requirement:</h4>
            <ul className="text-sm text-red-700 space-y-1 list-disc pl-4">
              <li>Min 8 characters</li>
              <li>One uppercase {"&"} one lowercase</li>
              <li>One number {"&"} one symbol {"(!@#$%^&*)"}</li>
            </ul>
          </div>
        </div>
        <img src="https://picsum.photos/seed/register/800/600" alt="Registration Guide" className="rounded-3xl shadow-lg border border-slate-200" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img src="https://picsum.photos/seed/epay/800/600" alt="ePay Guide" className="rounded-3xl shadow-lg border border-slate-200 order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold mb-4">2. ePay {"&"} Online Payments</h3>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Manage your policy payments with ease. Log in to eConnect, navigate to "My Portfolio" &gt; "View Policy Details", and click the "Pay Now" button at the top right corner.
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">1</span>
              <p className="text-sm text-slate-600">Select payment type (Renewal, APL, Reinstatement, etc.)</p>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">2</span>
              <p className="text-sm text-slate-600">Enter payment amount and card credentials.</p>
            </li>
            <li className="flex gap-4">
              <span className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center shrink-0">3</span>
              <p className="text-sm text-slate-600">Complete verification and receive your successful transaction notification.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const DownloadsPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <h2 className="text-3xl font-extrabold text-slate-900 mb-8 border-l-4 border-red-600 pl-4">Download Centre</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {DOWNLOAD_CENTRE.map((item, idx) => (
        <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-between group hover:border-red-300 transition-colors">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[10px] font-bold text-slate-500 uppercase mb-4">{item.category}</span>
            <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">{item.name}</h3>
            <p className="text-sm text-slate-500 line-clamp-2 mb-6">{item.description}</p>
          </div>
          <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:underline">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            Download PDF
          </button>
        </div>
      ))}
    </div>
  </div>
);

const FAQPage: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {FAQ_DATA.map((faq, idx) => (
          <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
            >
              <span className="font-bold text-slate-800">{faq.question}</span>
              <svg className={`w-5 h-5 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openIdx === idx && (
              <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed animate-in slide-in-from-top-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const ContactPage: React.FC = () => (
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
      <div className="lg:w-1/2 p-12 bg-red-600 text-white">
        <h2 className="text-4xl font-extrabold mb-8">Contact Us</h2>
        <div className="space-y-8">
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Our Office</p>
              <p className="text-red-100">{COMPANY_INFO.address}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Email Support</p>
              <p className="text-red-100">{COMPANY_INFO.email}</p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div>
              <p className="font-bold text-lg mb-1">Call Us</p>
              <p className="text-red-100 font-mono">{COMPANY_INFO.phone}</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/20">
            <p className="text-sm font-medium mb-2">Operating Hours:</p>
            <p className="text-slate-100">{COMPANY_INFO.operatingHours}</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 p-12 bg-slate-50">
        <h3 className="text-2xl font-bold mb-6 text-slate-800">Send us a message</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">First Name</label>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase">Last Name</label>
              <input type="text" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Email Address</label>
            <input type="email" className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase">Message</label>
            <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-red-500 outline-none" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors shadow-lg shadow-slate-200">Send Inquiry</button>
        </form>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  const renderContent = () => {
    switch (activeSection) {
      case AppSection.HOME: return <Home onNavigate={setActiveSection} />;
      case AppSection.CLAIMS: return <ClaimsPage />;
      case AppSection.SERVICE: return <ServicePage />;
      case AppSection.ECONNECT: return <EConnectPage />;
      case AppSection.FAQ: return <FAQPage />;
      case AppSection.DOWNLOADS: return <DownloadsPage />;
      case AppSection.CONTACT: return <ContactPage />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <Layout activeSection={activeSection} onNavigate={setActiveSection}>
      {renderContent()}
      <Chatbot />
    </Layout>
  );
};

export default App;
