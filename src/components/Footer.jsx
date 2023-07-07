export default function Footer({ navigation }) {
  return (
    <footer className="bg-[#FC2682]" aria-labelledby="footer-heading">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-2 lg:px-8">
        <div className="mt-2 border-gray-700 pt-2 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {navigation.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-300"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-base text-gray-100 md:order-1 md:mt-0">
            COPYRIGHT FAM COLLECTIVE 2023. ALL RIGHTS RESERVED
          </p>
          <p className="mt-8 text-base text-gray-100 md:order-3 md:mt-0">
            TERMS AND CONDITIONS / PRIVACY POLICY
          </p>
        </div>
      </div>
    </footer>
  );
}
