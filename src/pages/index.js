import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'normalize.css'
import HomeSearch from '../components/home/Search'
import ArchetypeList from '../components/archetypes/List'
import ArchetypesDemo from '../components/archetypes/Demo'
import PostsSearch from '../components/posts/PostsSearch'
import Layout from "../components/layout"
import SEO from "../components/seo"

const client = new ApolloClient({ uri: 'https://mymythos.org/graphql' });

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Layout>
      <SEO title="Home" keywords={[`project-mm`, `wordpress`, `react`]} />
      <h1>Project MM</h1>
      <HomeSearch />
      <ArchetypeList />
      <ArchetypesDemo />
      <PostsSearch />
    </Layout>
  </ApolloProvider>
)

export default IndexPage
