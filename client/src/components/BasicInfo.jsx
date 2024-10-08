const SectionTitle = ({ title }) => (
  <h2 className="font-bold text-[1rem] leading-relaxed">{title}</h2>
);

const FeatureItem = ({ title, description }) => (
  <li>
    <strong className="text-sm font-semibold">{title}</strong>
    <br />
    <span className="text-gray-700 text-sm">{description}</span>
  </li>
);

function BasicInfo() {
  return (
    <div className="main-container border border-gray-300 shadow-lg rounded-lg p-4 bg-white mx-auto max-w-xs">
      <section className="mb-2 text-left">
        <h1 className="font-bold text-[1.2rem] leading-relaxed">
          Welcome to Money-Memo
        </h1>
        <p className="text-gray-700 mt-1 text-sm">
          Simplify managing your finances, tracking spending, and splitting
          bills.
        </p>
      </section>

      <section className="mb-2 text-left">
        <SectionTitle title="Why Choose Us?" />
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <FeatureItem
            title="Expense Timeline"
            description="View your transactions clearly."
          />
          <FeatureItem
            title="Smart Budget Planning"
            description="Manage your budget efficiently."
          />
          <FeatureItem
            title="Bill Splitting"
            description="Split bills easily with friends."
          />
        </ul>
      </section>

      <section className="mb-2 text-left">
        <SectionTitle title="Premium Features" />
        <ul className="list-disc pl-5 space-y-1">
          <FeatureItem
            title="Smart Receipt Scanner"
            description="Take a picture of your receipt!"
          />
          <FeatureItem
            title="Voice Commands"
            description="Manage expenses hands-free."
          />
        </ul>
      </section>

      <article className="bg-blue-100 p-4 rounded-lg shadow-md text-left mt-2">
        <SectionTitle title="Join Our Community!" />
        <p className="text-sm text-gray-700">
          Manage finances smartly and securely. Sign up for financial freedom!
        </p>
      </article>
    </div>
  );
}

export default BasicInfo;
