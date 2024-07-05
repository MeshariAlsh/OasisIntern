import React from 'react';

export const Oasis = () => {
  return (
    <div className="container mx-auto my-16">
      <div className="mb-8 mt-11 mx-10 grid lg:grid-cols-1 gap-10">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">كيفية التقديم لشركتنا:</h2>
            <p className="text-gray-700 text-lg mb-2">
              نحن نقدر اهتمامك بالانضمام إلى فريقنا. يرجى اتباع الخطوات التالية للتقديم:
            </p>
            <ol className="list-decimal list-inside text-gray-700 text-lg mb-4">
              <li>قم بإعداد سيرتك الذاتية بتنسيق PDF أو Word.</li>
              <li>تأكد من أن سيرتك الذاتية تتضمن جميع معلوماتك الشخصية والخبرات العملية والتعليمية ذات الصلة.</li>
              <li>أرسل سيرتك الذاتية إلى البريد الإلكتروني التالي: <a href="mailto:oasisofficialintern@gmail.com" className="text-blue-500">oasisofficialintern@gmail.com</a></li>
            </ol>
            <p className="text-gray-700 text-lg">
              نشكرك على اهتمامك ونتمنى لك التوفيق في عملية التقديم. سنقوم بمراجعة سيرتك الذاتية والاتصال بك في حال كانت مؤهلاتك متوافقة مع متطلباتنا.
            </p>
            <p className="text-gray-700 text-lg">
              نشكرك مرة أخرى على رغبتك في الانضمام إلينا.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
