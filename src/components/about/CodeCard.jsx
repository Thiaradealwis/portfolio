import { Fragment } from 'react';

/** Editor-style card that renders `fields` as a TypeScript object literal. */
export default function CodeCard({ filename, variable, fields }) {
  return (
    <div className="code-card">
      <div className="code-card__bar">
        <span className="dot dot--orange" />
        <span className="dot dot--caramel" />
        <span className="dot dot--plum" />
        <span className="code-card__file">{filename}</span>
      </div>
      <pre className="code-card__body">
        <code>
          <span className="tok-keyword">const</span> {variable} = {'{\n'}
          {fields.map(({ key, value }) => (
            <Fragment key={key}>
              {`  ${key}: `}
              <span className="tok-string">{`"${value}"`}</span>
              {',\n'}
            </Fragment>
          ))}
          {'};'}
        </code>
      </pre>
    </div>
  );
}
