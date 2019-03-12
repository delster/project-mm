import React from 'react'
import { Link } from 'gatsby'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import 'normalize.css'
import Header from '../templates/Header'
import Footer from '../templates/Footer'
import ArchetypeList from '../components/archetypes/List'
import ArchetypesDemo from '../components/archetypes/Demo'
import PostsSearch from '../components/posts/PostsSearch'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const client = new ApolloClient({ uri: 'https://mymythos.org/graphql' });

const IndexPage = () => (
  <ApolloProvider client={client}>
    <Header />
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <h1>Project MM</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
      <ArchetypeList />
      <ArchetypesDemo />
      <PostsSearch />
    </Layout>
    <Footer />
  </ApolloProvider>
)

export default IndexPage
