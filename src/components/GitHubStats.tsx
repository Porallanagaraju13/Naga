import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Github, Star, GitFork, Eye } from "lucide-react";

interface GitHubStats {
  public_repos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalForks: number;
}

const GitHubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const username = "Porallanagaraju13";
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        if (!reposResponse.ok) throw new Error("Failed to fetch repos");
        const reposData = await reposResponse.json();

        // Calculate total stars and forks
        const totalStars = reposData.reduce(
          (sum: number, repo: any) => sum + repo.stargazers_count,
          0
        );
        const totalForks = reposData.reduce(
          (sum: number, repo: any) => sum + repo.forks_count,
          0
        );

        setStats({
          public_repos: userData.public_repos,
          followers: userData.followers,
          following: userData.following,
          totalStars,
          totalForks,
        });
      } catch (err) {
        console.error("Error fetching GitHub stats:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubStats();
  }, []);

  if (loading) {
    return (
      <Card className="tech-card">
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </Card>
    );
  }

  if (error || !stats) {
    return (
      <Card className="tech-card">
        <div className="text-center p-8">
          <Github className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
          <p className="text-muted-foreground">GitHub stats unavailable</p>
        </div>
      </Card>
    );
  }

  const statItems = [
    {
      label: "Repositories",
      value: stats.public_repos,
      icon: Github,
      color: "text-primary",
    },
    {
      label: "Stars",
      value: stats.totalStars,
      icon: Star,
      color: "text-yellow-500",
    },
    {
      label: "Forks",
      value: stats.totalForks,
      icon: GitFork,
      color: "text-blue-500",
    },
    {
      label: "Followers",
      value: stats.followers,
      icon: Eye,
      color: "text-green-500",
    },
  ];

  return (
    <Card className="tech-card">
      <div className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <Github className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold">GitHub Activity</h3>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item, index) => (
            <div
              key={item.label}
              className="flex flex-col items-center p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <item.icon className={`w-5 h-5 mb-2 ${item.color}`} />
              <div className="text-2xl font-bold text-gradient">{item.value}</div>
              <div className="text-xs text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
        <a
          href="https://github.com/Porallanagaraju13"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center text-sm text-primary hover:underline mt-4"
          aria-label="View GitHub profile"
        >
          View Profile →
        </a>
      </div>
    </Card>
  );
};

export default GitHubStats;
