import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const ARCHETYPES_DEMO_QUERY = gql`
  query GetArchetypeRelationships {
    archetypes {
      edges {
        node {
          ...ArchetypeFields
        }
      }
    }
  }

  fragment ArchetypeFields on Archetype {
    archetypeId
    title
    related_posts {
      postId
      title
      link
    }
    related_users {
      userId
      username
    }
  }
`;


const ArchetypesDemo = ({query}) => {
  return (
  <div>
  <h2>Archetypes Demo</h2>
  <Query query={ARCHETYPES_DEMO_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error!</p>;
      if (!data.archetypes.edges.length) return <p>No archetypes found.</p>;
      return data.archetypes.edges.map(edge => {
        const { node: archetype } = edge;
        const { archetypeId } = archetype;
        return (
          <div key={archetypeId}>
            <h3>{archetype.title}</h3>
            { archetype.related_posts!==null &&
              <div className="related-posts">
                <h4>Related Posts:</h4>
                <ul>{archetype.related_posts.map(rp => <li><a href={rp.link}>{rp.title}</a></li>)}</ul>
              </div>
            }
            { archetype.related_users!==null &&
              <div className="related-users">
                <h4>Related Users:</h4>
                <ul>{archetype.related_users.map(ru => <li>{ru.username}</li>)}</ul>
              </div>
            }
          </div>
        );
      })
    }}
  </Query>
  </div>
  );
}

export default ArchetypesDemo