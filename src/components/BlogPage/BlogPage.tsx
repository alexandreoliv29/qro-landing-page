import { BigPost } from "./BigPost"
import { Cards } from "./Cards"
import { FooterBlog } from "./FooterBlog"
import { HeaderBlog } from "./HeaderBlog"


export const BlogPage = () => {
    return (
        <div className="">
            <HeaderBlog />
            <Cards />
            <BigPost />
            <FooterBlog />
        </div>
    )
}