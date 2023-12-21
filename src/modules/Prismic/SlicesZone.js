import React from "react";
import slices from "modules/Prismic/slices/slices";
import resolvers from "modules/Prismic/slices/resolvers";

const Error = () => {
  return "component not found";
};

const Slice = ({ content, ident, type }) => {
  const Component = slices[type] ? slices[type].Slice : Error;
  return <Component content={content} ident={ident} />;
};

const SlicesZone = ({ slices }) => {
  return (
    <div className="slice-zone">
      {slices.map((slice, key) => {
        const content = resolvers[slice.slice_type]
          ? resolvers[slice.slice_type](slice)
          : slice;
        return (
          <Slice
            key={key}
            ident={key}
            type={slice.slice_type}
            content={content}
          />
        );
      })}
    </div>
  );
};

export default SlicesZone;
