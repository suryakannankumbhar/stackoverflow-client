import React from 'react'
import LeftSideBar from '../../components/LeftSidebar/LeftSidebar'
import TagsList from './TagsList'
import './Tags.css'
import { useTranslation } from 'react-i18next';


const Tags = () => {
  const { t } = useTranslation(["tags"]);

    const tagsList = [
        {
            id:0,
            tagName: "Kotlin",
            tagDesc: t("kotlin")
        },{
            id:1,
            tagName: "Python",
            tagDesc: t("python")
        },
        {
            id:2,
            tagName: "C#",
            tagDesc: t("c")
        },{
            id:3,
            tagName: "JavaScript",
            tagDesc: t("javascript")
        },{
            id:4,
            tagName: "Android",
            tagDesc: t("android")
        },{
            id:5,
            tagName: "PHP",
            tagDesc: t("php")
        }
    ]

  return (
    <div className="home-container-1">
        <LeftSideBar/>
        <div className="home-container-2">
        <h1 className="tags-h1">{t("tags")}</h1>
        <p className="tags-p">
        {t("atagisakeyword")}
        </p>
        <p className="tags-p">
        {t("usingtherighttags")}
        </p>
        <div className="tags-list-container">
          {tagsList.map((tag) => (
            <TagsList tag={tag} key={tagsList.id} />
          ))}
        </div>
        </div>
    </div>
  )
}

export default Tags