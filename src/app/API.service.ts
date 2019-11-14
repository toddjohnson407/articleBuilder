/* tslint:disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation } from "@aws-amplify/api";
import { GraphQLResult } from "@aws-amplify/api/lib/types";
import * as Observable from "zen-observable";

export type CreateUserInput = {
  id?: string | null;
  username: string;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
};

export type UpdateUserInput = {
  id: string;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  bio?: string | null;
  image?: string | null;
};

export type DeleteUserInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  content: string;
  author?: string | null;
  description?: string | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  content?: string | null;
  author?: string | null;
  description?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null;
  username?: ModelStringFilterInput | null;
  firstName?: ModelStringFilterInput | null;
  lastName?: ModelStringFilterInput | null;
  bio?: ModelStringFilterInput | null;
  image?: ModelStringFilterInput | null;
  and?: Array<ModelUserFilterInput | null> | null;
  or?: Array<ModelUserFilterInput | null> | null;
  not?: ModelUserFilterInput | null;
};

export type ModelIDFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelStringFilterInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDFilterInput | null;
  title?: ModelStringFilterInput | null;
  content?: ModelStringFilterInput | null;
  author?: ModelStringFilterInput | null;
  description?: ModelStringFilterInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type CreateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type UpdateUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type DeleteUserMutation = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type GetUserQuery = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type ListUsersQuery = {
  __typename: "ModelUserConnection";
  items: Array<{
    __typename: "User";
    id: string;
    username: string;
    firstName: string | null;
    lastName: string | null;
    bio: string | null;
    image: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    content: string;
    author: string | null;
    description: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type OnUpdateUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type OnDeleteUserSubscription = {
  __typename: "User";
  id: string;
  username: string;
  firstName: string | null;
  lastName: string | null;
  bio: string | null;
  image: string | null;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  content: string;
  author: string | null;
  description: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateUser(input: CreateUserInput): Promise<CreateUserMutation> {
    const statement = `mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateUserMutation>response.data.createUser;
  }
  async UpdateUser(input: UpdateUserInput): Promise<UpdateUserMutation> {
    const statement = `mutation UpdateUser($input: UpdateUserInput!) {
        updateUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateUserMutation>response.data.updateUser;
  }
  async DeleteUser(input: DeleteUserInput): Promise<DeleteUserMutation> {
    const statement = `mutation DeleteUser($input: DeleteUserInput!) {
        deleteUser(input: $input) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteUserMutation>response.data.deleteUser;
  }
  async CreatePost(input: CreatePostInput): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!) {
        createPost(input: $input) {
          __typename
          id
          title
          content
          author
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(input: UpdatePostInput): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!) {
        updatePost(input: $input) {
          __typename
          id
          title
          content
          author
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(input: DeletePostInput): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!) {
        deletePost(input: $input) {
          __typename
          id
          title
          content
          author
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async GetUser(id: string): Promise<GetUserQuery> {
    const statement = `query GetUser($id: ID!) {
        getUser(id: $id) {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetUserQuery>response.data.getUser;
  }
  async ListUsers(
    filter?: ModelUserFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListUsersQuery> {
    const statement = `query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
        listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            username
            firstName
            lastName
            bio
            image
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListUsersQuery>response.data.listUsers;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          content
          author
          description
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            content
            author
            description
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  OnCreateUserListener: Observable<OnCreateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreateUser {
        onCreateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnCreateUserSubscription>;

  OnUpdateUserListener: Observable<OnUpdateUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdateUser {
        onUpdateUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnUpdateUserSubscription>;

  OnDeleteUserListener: Observable<OnDeleteUserSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeleteUser {
        onDeleteUser {
          __typename
          id
          username
          firstName
          lastName
          bio
          image
        }
      }`
    )
  ) as Observable<OnDeleteUserSubscription>;

  OnCreatePostListener: Observable<OnCreatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          content
          author
          description
        }
      }`
    )
  ) as Observable<OnCreatePostSubscription>;

  OnUpdatePostListener: Observable<OnUpdatePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          content
          author
          description
        }
      }`
    )
  ) as Observable<OnUpdatePostSubscription>;

  OnDeletePostListener: Observable<OnDeletePostSubscription> = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          content
          author
          description
        }
      }`
    )
  ) as Observable<OnDeletePostSubscription>;
}
