import { List, ListItem, Card } from "@material-tailwind/react";

export function ListDefault({ data }) {
  return (
    <Card className="w-full !bg-transparent !shadow-none">
      <List>
        {data.map((e, index) => (
          <ListItem
            key={index}
            disabled={true}
            className="!text-black !opacity-100 "
          >
            • {e}
          </ListItem>
        ))}
      </List>
    </Card>
  );
}
