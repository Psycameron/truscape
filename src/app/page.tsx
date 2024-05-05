import StatusLabel, {
  Status,
} from "./components/UIKit/ActiveLabel/StatusLabel";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl">Home Page</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </main>
  );
}
