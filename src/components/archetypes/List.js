import React from 'react'
import { Query } from 'react-apollo'
import gql, { disableFragmentWarnings }  from 'graphql-tag'
import ArchetypesCard from './Card'

const ARCHETYPE_LIST_QUERY = gql`
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
    link
    excerpt
    related_posts {
      postId
      title
      link
    }
    related_users {
      userId
      username
    }
    featuredImage {
      altText
      sourceUrl
    }
  }
`;


const ArchetypesList = ({ searchQuery }) => (
  <Query query={ARCHETYPE_LIST_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>
      if (!data.archetypes.edges.length) return <p>No matching archetypes found.</p>

      return (
        <div>
          <h2>Archetypes List</h2>
          <div className='results' style={{
            display: `grid`,
            gridGap: `1em`,
            gridTemplateColumns: `repeat(4, 1fr)`,
            gridTemplateAreas: `. . . .`
          }}>
            {
              data.archetypes.edges.map(edge => {
                const { node: post } = edge
                const { postId } = post
                return <ArchetypesCard key={postId} post={post} />
              })
            }
          </div>
        </div>
      )
    }}
  </Query>
);

gql.disableFragmentWarnings = disableFragmentWarnings;

export default ArchetypesList