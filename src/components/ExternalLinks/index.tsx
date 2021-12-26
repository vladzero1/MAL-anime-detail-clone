import React, { useState } from 'react'
import { externalLinks } from '../../constant';
import { ContentHeader } from '../ContentHeader';

interface ExternalLinksProps {
}

export const ExternalLinks: React.FC<ExternalLinksProps> = () => {
  const [externalLinksData]= useState(externalLinks)
    return (
      <>
        <ContentHeader text={"External Links"} />
        <div>
          {externalLinksData.map(({ text, link }, index) => {
            return (
              <span key={text}>
                <a
                  href={link}
                  className="a"
                  key={text}
                  style={{ fontSize: "11px", fontFamily: "Verdana, Arial" }}
                >
                  {text}
                </a>
                {index === externalLinks.length - 1 ? null : ", "}
              </span>
            );
          })}
        </div>
      </>
    );
}