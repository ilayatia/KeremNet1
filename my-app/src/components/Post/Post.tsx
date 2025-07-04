import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Children } from "react";
import Comment from "../Comment/Comment";
import { CommentModel } from "../../Models/Comment";
import { PostModel } from "../../Models/Post";
import "./Post.css";

interface PostProps {
  post: PostModel;
}

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Post: React.FC<PostProps> = ({ post }: PostProps) => {
  const [newComment, SetNewComment] = React.useState<string>("");
  const [comments, SetComments] = React.useState<string[]>([]);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className="margin" sx={{ width: 330 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {post.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.name}
        subheader={post.date}
      />
      <CardContent className="orange">
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {post.likes}
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ marginBottom: 2 }}>Comments:</Typography>
          <Typography sx={{ marginBottom: 2 }}></Typography>
          <Typography sx={{ marginBottom: 2 }}>
            <input
              placeholder="Enter comment:"
              value={newComment}
              onChange={(e) => {
                SetNewComment(e.target.value);
              }}
            ></input>
            <input
              type="submit"
              onClick={() => {
                SetComments((prev) => [newComment, ...prev]);
              }}
            ></input>
            {comments.map((comment) => (
              <Comment commentModel={{ name: "Anonymous", text: comment }} />
            ))}
            {post.comments.map((comment: CommentModel) => (
              <Comment
                commentModel={{ name: comment.name, text: comment.text }}
              />
            ))}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default Post;
