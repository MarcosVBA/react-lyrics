function SplitedLyrics (props){
  return props.text.split('\n').map((str, index) => {
    return index === 0 ? <h3 key={"phrase"+index}>{str}</h3> : <p key={"phrase"+index}>{str}</p>;
  });
}

SplitedLyrics.defaultProps = {
  text: "Escolha uma musica..."
}

export default SplitedLyrics;