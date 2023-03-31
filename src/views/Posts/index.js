import React, { useEffect, useState, useRef } from "react";
import moment from "moment";
import getPostById from "../Admin/Posts/services/getPostById";
import { useNavigate, useParams } from "react-router-dom";

import {
  Author,
  ProfileImg,
  Banner,
  Subtitle,
} from './styles';

import {
  Container,
  Col,
  T1,
  Inline,
  Box,
  T3,
} from '~/components';

function Posts() {
  const navigate = useNavigate();
  const { id, title } = useParams();

  const divRef = useRef(null);
  const [post, setPost] = useState(null);

  const _getPostById = async () => {
    const post = await getPostById(id);

    if (post.draft) navigate('/dashboard');

    setPost(post);
  }

  useEffect(() => {
    _getPostById();
  }, []);

  useEffect(() => {
    divRef.current.innerHTML = post?.content;
  }, [post]);

  return (
    <Container>
      <Box className="mt-20">
        <Inline className="mt-10">
          <Col cols={2}></Col>
          <Col cols={8}>
            <Author>
              <ProfileImg
                className="mr-10"
                img={post?.user?.imgUrl}
              />
              <div>
                <p className="name">{post?.user?.name} {`<${post?.user?.email}>`}</p>
                <p className="publishedDate">Publicação em {moment(post?.publishedAt).format("DD/MM/yyyy HH:mm")}</p>
              </div>
            </Author>
          </Col>
          <Col cols={2}></Col>
        </Inline>
        <Inline className="mt-20">
          <Col cols={2}></Col>
          <Col cols={8}>
            <div>
              <T1>{post?.title}</T1>
              <Subtitle>{post?.subtitle}</Subtitle>
            </div>
          </Col>
          <Col cols={2}></Col>
        </Inline>
        {
          post?.thumbnailUrl ? (
            <Inline className="mt-10">
              <Col cols={2}></Col>
              <Col cols={8}>
                <Banner img={post?.thumbnailUrl} />
              </Col>
              <Col cols={2}></Col>
            </Inline>
          ) : <div className="mt-10"></div>
        }
        <Inline>
          <Col cols={2}></Col>
          <Col className="mt-20" cols={8}>
            <div ref={divRef}></div>
          </Col>
          <Col cols={2}></Col>
        </Inline>
      </Box>
    </Container>
  );
}

export default Posts;
