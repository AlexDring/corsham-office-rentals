// /deskStructure.js
import S from '@sanity/desk-tool/structure-builder'
import { FiHome, FiSettings } from 'react-icons/fi'
export default () =>
  S.list()
    .title('Content')
    .items(
      [
        S.listItem()
        .title('Home Page')
        .icon(FiHome)
        .child(
          S.document()
            .schemaType('page')
            .documentId('homePage')
        ),
        S.listItem()
        .title('Pages')
        .schemaType('page')
        .child(
          S.documentList('page')
            .title('Pages')
            .menuItems(S.documentTypeList('page').getMenuItems())
            .filter('_type == "page" && _id != "drafts.homePage" && _id != "homePage"')
        ),
        // S.listItem()
        // .title('Menu')
        // .icon(FiMap)
        // .child(
        //   S.document()
        //   .schemaType('route')
        //   .documentId('211b7490-e62b-4b2a-9846-dccbe8ecf1e5')
        //   ),
        // S.listItem()
        // .title('Contact Details')
        // .icon(FiPhoneIncoming)
        // .child(
        //   S.document()
        //   .schemaType('contact')
        //   // .documentId('211b7490-e62b-4b2a-9846-dccbe8ecf1e5')
        //   ),
        S.listItem()
        .title('Site Settings')
        .icon(FiSettings)
        .child(
          S.document()
          .schemaType('siteSettings')
          ),
          ...S.documentTypeListItems().filter(item => !['route', 'page', 'contact', 'siteSettings'].includes(item.getId())),
      ]
    )