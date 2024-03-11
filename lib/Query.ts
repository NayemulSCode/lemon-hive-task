import { gql } from "@apollo/client";

export const GET_CONFERENCES = gql`
  query GetConferences {
    conferences {
      id
      name
      year
      websiteUrl
      startDate
      endDate
      slogan
      series {
        id
        name
      }
      name
      organizer {
        firstName
        lastName
        name
        about
      }

      locations {
        name
        about
        city
        address
      }
      sponsors {
        name
        about
        aboutShort
        company
        tagline
        image {
          url
          title
        }
      }
    }
  }
`;

export const GET_CONFERENCE = gql`
  query conference($id: ID!) {
    conference(id: $id) {
      id
      name
      year
      startDate
      endDate
      organizers {
        name
        about
        aboutShort
        tagline
        company
        image {
          url
          title
          style {
            backgroundSize
          }
        }
      }
      sponsors {
        name
        about
        aboutShort
        company
        tagline
        image {
          url
          title
          style {
            backgroundSize
          }
        }
      }
      speakers {
        name
        about
        aboutShort
        company
        tagline
        social {
          dribble
          linkedin
          github
          twitter
        }
        image {
          url
          title
          style {
            backgroundSize
          }
        }
      }
      schedules {
        day
        location {
          name
          about
          country {
            name
            code
          }
          city
          address
        }
        description
        intervals {
          begin
          end
          title
          location {
            name
            about
            country {
              name
              code
            }
            city
            address
          }
          drawing
        }
      }
    }
  }
`;
