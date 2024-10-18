import React from 'react';

export const MainPage = () => {
  return (

      <div className="container mx-auto my-16">
        <div className="mb-8 mt-11 mx-10 grid lg:grid-cols-1 gap-10">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6">
            <h1 className="text-3xl font-bold mb-4">مرحبًا بكم في أوسيس إنترن!</h1>
            <p className="text-gray-700 text-lg mb-4">
              نحن في أوسيس إنترن نهدف إلى توفير فرص تدريبية مثالية للشباب الطموح في دول الخليج. سواء كنت طالبًا تبحث عن خبرة عملية أو خريجًا جديدًا يسعى لتطوير مهاراته واكتساب خبرات جديدة، فإن منصتنا توفر لك الفرصة لتحقيق ذلك.
            </p>
            <p className="text-gray-700 text-lg">
              لاستكشاف الفرص المتاحة، يُرجى الضغط على أحد الخيارات في القائمة العلوية. نحن هنا لمساعدتك في بدء رحلتك المهنية وبناء مستقبلك الواعد.
            </p>
            <p className="text-gray-700 text-lg">
              نشكركم على زيارتكم ونتمنى لكم التوفيق في مسيرتكم المهنية!
            </p>
          </div>
        </div>
      </div>
  
  );
}
