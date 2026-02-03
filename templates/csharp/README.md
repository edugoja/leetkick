# C# LeetCode Practice

This workspace is configured for solving LeetCode problems in C# using .NET 9.0 and xUnit.

## Prerequisites

- [.NET SDK 9.0](https://dotnet.microsoft.com/download)

## Project Structure

```
csharp/
├── LeetKick.csproj          # Project file with xUnit dependencies
├── problem0001/             # Directory per problem
│   ├── TwoSum.cs            # Your solution implementation
│   ├── TwoSumTest.cs        # xUnit tests
│   └── README.md            # Problem description
└── problem0002/
    └── ...
```

## Commands

Run all tests:
```bash
dotnet test
```

Run tests for a specific problem:
```bash
dotnet test --filter "TwoSum"
```

Build without running tests:
```bash
dotnet build
```

## Generated Code Examples

Each problem generates solution and test files with the problem description and starter code:

**Solution file (`TwoSum.cs`):**
```csharp
namespace LeetKick.problem0001;

public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        // Your solution here
        return Array.Empty<int>();
    }
}
```

**Test file (`TwoSumTest.cs`):**
```csharp
using Xunit;
using LeetKick.problem0001;

namespace LeetKick.problem0001;

public class TwoSumTest
{
    [Fact]
    public void TestSolution()
    {
        var solution = new Solution();
        // TODO: Add test cases
        Assert.Equal(new[] { 0, 1 }, solution.TwoSum(new[] { 2, 7, 11, 15 }, 9));
    }
}
```

## IDE Setup

Open this `csharp/` directory in Visual Studio Code or Rider. The IDE will automatically detect the .NET project.
