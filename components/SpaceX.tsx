import React from 'react';
import { useQuery } from 'urql';
import { Badge, Flex, Heading, HStack, Link, Text, VStack } from 'chakra-ui';

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
  return (
    <VStack spacing={4} align="stretch" p={4}>
      {result.data?.launchesPast?.map(({ mission_name, launch_date_local, links, rocket, details }) => {
        return (
          <Flex as="article" direction="column" gap={2} p="4" borderWidth="1px" borderRadius="lg" key={mission_name}>
            <Heading as="h2" size="lg">
              {mission_name}
            </Heading>
            <Flex direction="column" gap={2}>
              <HStack spacing={2}>
                <Text fontSize="sm">{new Date(launch_date_local).toLocaleDateString()}</Text>
                <Badge colorScheme="blue" borderRadius="full">
                  {rocket?.rocket_name}
                </Badge>
              </HStack>
              <Text>{details}</Text>
              <HStack spacing={2}>
                <Link href={links.video_link} isExternal color="blue">
                  video
                </Link>
                <Link href={links.article_link} isExternal color="blue">
                  article
                </Link>
              </HStack>
            </Flex>
          </Flex>
        );
      })}
    </VStack>
  );
}
