import React, { useEffect, useState, useRef } from 'react';
import getPostById from '../../services/getPostById';
import createPost from '../../services/createPost';
import updatePost from '../../services/updatePost';
import deletePost from '../../services/deletePost';
import postSchema from '~/utils/validations/postSchema';

import {
  Box,
  T2,
  T3,
  Inline,
  Col,
  Form,
  Input,
  Check,
  Button,
  StyledError,
} from '~/components';
import { toast } from 'react-toastify';
import { Editor } from '@tinymce/tinymce-react';

function PostDetails({ postId, isEditing=false, searchPosts, reset }) {
  const editorRef = useRef(null);
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [initialValues, setInitialValues] = useState({
    title: '',
    subtitle: '',
    draft: false,
    thumbnailUrl: null,
  });

  const handleSubmit = async ({ values }) => {
    const data = {...values};

    data.draft = !data.draft;
    console.log(data)
    console.log(editorRef.current.getContent());
    let success = false;

    setIsLoading(true);

    if (postId && isEditing) {
      success = await updatePost(post.id, data);
    } else {
      success = await createPost(data);
    }

    setIsLoading(false);

    if (success) {
      toast.success("Postagem criada com sucesso");
      searchPosts();
      reset(null);
    } else {
      toast.error("Erro ao criar postagem");
    }
  };

  const _getPostById = async () => {
    console.log(postId)
    const post = await getPostById(postId);

    setPost(post);
  };

  const handleDeletePost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const success = await deletePost(post.id);

    setIsLoading(false);

    if (success) {
      searchPosts();
      reset(null);
    }
  };

  useEffect(() => {
    if (post && isEditing) {
      setInitialValues({
        title: post.title || '',
        subtitle: post.subtitle || '',
        draft: !post.draft || false,
        thumbnailUrl: post.thumbnailUrl || null,
        content: post.content || '',
      });
    } else {
      setInitialValues({
        title: '',
        subtitle: '',
        draft: false,
        thumbnailUrl: null,
        content: "",
      });
    }
  }, [post, isEditing]);

  useEffect(() => {
    if (postId && isEditing)
      _getPostById()
  }, [postId]);

  return (
    <Box className='mt-20'>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={postSchema}
      >
        {
          ({ errors, values, setValue }) => (
            <Inline>
              <Col cols={12}>
                <T2>
                  Detalhes da postagem
                  {
                    postId && isEditing ? (
                      <strong> #{String(postId).padStart(3, '0')}</strong>
                    ) : <></>
                  }
                </T2>
                {
                  postId && isEditing ? (
                    <a className='ml-20' href={`/dashboard/posts/${postId}/title`} target="_blank" rel="noreferrer"> Ir para página</a>
                  ) : <></>
                }
              </Col>
              <Col className="mt-10" cols={12}>
                <Input type="text" name="title" label="Título" placeholder="Título" />
              </Col>
              <Col className="mt-10" cols={12}>
                <Input type="text" name="subtitle" label="Subtítulo" placeholder="Subtítulo" />
              </Col>
              <Col className="mt-10" cols={12}>
                <Input type="text" name="thumbnailUrl" label="URL imagem do banner" placeholder="A URL aqui" />
              </Col>
              <Col className="mt-10" cols={12}>
                <T3>Conteúdo</T3>
              </Col>
              <Col className="mt-10" cols={12}>
                <Editor
                  tagName='content'
                  apiKey='r4t2mq444d60uedqukz8j9dvej9tvul9xdxnfm6d6w4uneif'
                  onInit={(evt, editor) => editorRef.current = editor}
                  value={values.content}
                  onEditorChange={(e) => setValue({ target: { value: e } }, 'content')}
                  init={{
                    height: 500,
                    width: '100%',
                    menubar: false,
                    selector: 'textarea',
                    plugins: [
                      'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                      'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                      'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                    ],
                    toolbar: 'undo redo | blocks | ' +
                      'bold italic forecolor | alignleft aligncenter ' +
                      'alignright alignjustify | bullist numlist outdent indent | ' +
                      'removeformat | help',
                      file_picker_callback: (callback, value, meta) => {
                        // Provide file and text for the link dialog
                        if (meta.filetype == 'file') {
                          callback('mypage.html', { text: 'My text' });
                        }
                        // Provide image and alt text for the image dialog
                        if (meta.filetype == 'image') {
                          callback('myimage.jpg', { alt: 'My alt text' });
                        }
                        // Provide alternative source and posted for the media dialog
                        if (meta.filetype == 'media') {
                          callback('movie.mp4', { source2: 'alt.ogg', poster: 'image.jpg' });
                        }
                      }
                  }}
                />
              </Col>
              {
                errors.content ? (
                  <Col cols={12}>
                    <StyledError className="mt-10">{errors.content}</StyledError>
                  </Col>
                ) : <></>
              }
              <Col className="mt-10" cols={3}>
                <Check type="radio" name="draft" label="Publicar" />
              </Col>
              <Col className="mt-20" cols={12}>
                <Inline right>
                  {
                    postId && isEditing ? (
                      <Button className="mr-10" isLoading={isLoading} onClick={handleDeletePost}>Deletar</Button>
                    ) : <></>
                  }
                  <Button type="submit" isLoading={isLoading}>{postId && isEditing ? 'Salvar' : 'Criar'}</Button>
                </Inline>
              </Col>
            </Inline>
          )
        }
      </Form>
    </Box>
  );
}

export default PostDetails;
