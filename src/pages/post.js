// import { useState, useEffect, useRef } from "react"
import { useParams, useNavigate, useMatch } from 'react-router-dom';
// import { useQuery } from '@apollo/client'
import { Button } from 'antd'
// import Quill from 'quill'
// import 'quill/dist/quill.snow.css'
// import { GET_POST_QUERY } from '../queries/posts'
import { Helmet } from "react-helmet"

const options = {
    theme: 'snow'
}

const data = {
    post: {
        "author": "Vandreh Esm",
        // "bg_src": "https://static.wixstatic.com/media/536226_288f258aa014431ea0e62bf24fe40d96~mv2.jpeg/v1/fill/w_310,h_388,fp_0.50_0.50,q_90,enc_auto/536226_288f258aa014431ea0e62bf24fe40d96~mv2.jpeg",
        "bg_src": "https://static.wixstatic.com/media/536226_e9b2c1a6194d46e3a7e3bcf62c4c78b8~mv2.jpeg/v1/fill/w_310,h_439,fp_0.50_0.50,q_90,enc_auto/536226_e9b2c1a6194d46e3a7e3bcf62c4c78b8~mv2.jpeg",
        "bg_type": "Image",
        "description": "Lorem ipsu dolor set amet, consectetur adipisicing elit.",
        "id": "1",
        "image": "anyone_can_code.jpg",
        "keyword1": "Programing",
        "keyword2": "Everyone",
        "text": "lorem ipsum",
        "title": "Projeto: “DEMOCRACIA, DIREITOS: CRIANÇAS E ADOLESCENTES. FORTALECIMENTO DO SISTEMA DE GARANTIA DE DIREITOS NAS UNIDADES FEDERATIVAS”",
        "updated_at": "1609193152000"
    }
}
export default function PostViewer () {
    // const contentContainer = useRef(null)
    // const [editorEl, setEditorEl] = useState(null)
    // let { id } = useParams()
    const navigate = useNavigate()
    // const match = useMatch()

    // const {data, error, loading} = useQuery(GET_POST_QUERY, {
    //     variables: { id },
    //     onCompleted: ({ post }) => {
    //         if(post.text) {
    //             console.log(post)
    //             const delta = JSON.parse(post.text)
    //             editorEl.setContents(delta)
    //         }
    //     }
    // })

    const editPost = () => { navigate('/edit-post', { state:  data }); }
    // const editPost = () => history.push({ 
    //     pathname: '/edit-post',
    //     state: { data }
    // })

    // useEffect(() => { setEditorEl(new Quill(contentContainer.current, options)) }, [])

    return (
        <article className="post-viewer-container">
            <h1>Edit Post</h1>
            <Helmet>
                <title>{data?.post?.title}</title>
                <meta property="og:image" content={data?.post?.image} />
                <meta property="og:title" content={data?.post?.title} />
                {/* <meta property="og:url" content={match.url} /> */}
                <meta property="og:type" content="article" />
                <meta name="description" content={data?.post?.description} />
            </Helmet>
            {/* <Button type="primary" onClick={()=>{editPost()}}>Edit Post</Button> */}
            <Button type="primary" onClick={editPost}>Edit Post</Button>
            <section className="post-intro-container">
                {
                    data?.post?.bg_type === '2' ?
                        (<section className="iframe-container">
                            {data?.post?.bg_src &&
                                <iframe title="background-video" src={data?.post?.bg_src} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            }
                        </section>)
                        :
                        (<figure>
                            <img 
                                src={data?.post?.bg_src || 'https://cdn5.vectorstock.com/i/thumb-large/99/94/default-avatar-placeholder-profile-icon-male-vector-23889994.jpg'}
                                alt="post-background"
                            />
                        </figure>)
                }
            </section>
            <section className="post-title-container">
                <div className="title-wrapper">
                    <h1>{data?.post?.title}</h1>
                    <p className="flex flex-column">
                        <span>
                            {data?.post?.author && `Author: ${data?.post?.author}`}
                        </span>
                        
                        <span>  -  Last Updated: 
                            {data?.post?.updated_at && new Date(parseInt(data?.post?.updated_at)).toLocaleDateString()}
                        </span>
                    </p>
                </div>
            </section>
            <section className="post-content-container">
                <p>What is Lorem Ipsum?
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                    Why do we use it?
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    Where does it come from?
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                    Where can I get some?
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                {/* <section ref={contentContainer}></section> */}
            </section>
        </article>
    )
}
