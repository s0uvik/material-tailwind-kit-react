import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, children }) {
  return (
    <div className="w-full lg:w-6/12 px-4 text-center mx-auto">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
      <Typography variant="lead" className="text-blue-gray-500">
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
