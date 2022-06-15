import {ApolloClient, InMemoryCache} from '@apollo/client';
import {mergePolicyCharacters} from '../queries/getAllCharactersQuery';

export const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: false,
            merge(existing: any = [], incoming: any) {
              return mergePolicyCharacters(existing, incoming);
            },
          },
        },
      },
    },
  }),
});
