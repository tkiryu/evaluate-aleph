import React from 'react';
import { useQuery } from 'urql';

const LaunchesPastQuery = `
{
  launchesPast(limit: 10) {
    mission_name
    launch_date_local
    links {
      video_link
      article_link
    }
    rocket {
      rocket_name
    }
    details
  }
}
`;

export function SpaceX() {
  const [result] = useQuery({
    query: LaunchesPastQuery,
  });
  const { data, error } = result;

  if (error) return <p>{JSON.stringify(error, null, 2)}</p>;

  return (
    <>
      {data?.launchesPast?.map(({ mission_name, launch_date_local, links, rocket, details }) => {
        return (
          <article key={mission_name}>
            <h2>Mission: {mission_name}</h2>
            <section>
              <p>
                {new Date(launch_date_local).toLocaleDateString()} | <strong>{rocket?.rocket_name}</strong>
              </p>
              <p>{details}</p>
              <div>
                <a href={links.video_link} target="_blank">
                  video
                </a>{' '}
                <a href={links.article_link} target="_blank">
                  article
                </a>
              </div>
            </section>
            <hr />
          </article>
        );
      })}
    </>
  );
}
