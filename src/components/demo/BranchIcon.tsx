import { Eye, Sparkles, Feather, Smile, type LucideProps } from "lucide-react";
import type { Branch } from "@/data/branches";

const MAP = { Eye, Sparkles, Feather, Smile };

export default function BranchIcon({ icon, ...props }: { icon: Branch["icon"] } & LucideProps) {
  const Icon = MAP[icon];
  return <Icon {...props} />;
}
