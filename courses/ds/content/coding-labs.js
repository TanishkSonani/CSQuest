// Optional guided programs. Their identities never enter the lesson ladder.
const prefix='#include <stdio.h>\n#include <assert.h>\n#include <stdlib.h>\n\n';
const lab=(unitId,title,prompt,code,answer,distractors,hints,examples)=>({id:`ds-unit-${unitId}`,unitId,version:1,optional:true,language:'C11',minutes:10,title,prompt,template:prefix+code,editorTemplate:code.slice(0,code.indexOf('int main(void)')).trim(),answer,tokens:[...new Set([...answer,...distractors])],hints,examples:examples.map(([label,output])=>({label,output})),expectedOutput:examples.map(e=>e[1]).join('\n')+'\n'});
export const codingLabs=[
 lab(0,'Build and walk a linked list','Complete prepend and length. Nodes are already allocated by the starter. Make the new node the head and follow next links until NULL.',String.raw`typedef struct Node { int value; struct Node *next; } Node;
Node *prepend(Node *head, Node *fresh) {
    fresh->next = {{0}};
    return {{1}};
}
int length(Node *head) {
    int count = 0;
    for (Node *p = head; p != NULL; {{2}}) count++;
    return count;
}
int main(void) {
    Node a = {1, NULL}, b = {2, &a}, fresh = {9, NULL};
    printf("%d\n", length(NULL));
    Node *head = prepend(&b, &fresh);
    assert(head == &fresh && fresh.next == &b);
    printf("%d\n", length(head));
    printf("%d\n", head->value);
    return 0;
}`,['head','fresh','p = p->next'],['NULL','p = head','head->next'],['The new link must retain the entire old list.','Return the newly allocated node as the head.','Advance along next instead of returning to the original head.'],[['Empty length','0'],['Length after prepend','3'],['New head payload','9']]),
 lab(1,'Reverse a list recursively','Finish the recursive reversal. Reverse the suffix first, reconnect the original next node to head, and remove head’s old forward link.',String.raw`typedef struct Node { int value; struct Node *next; } Node;
Node *reverse(Node *head) {
    if (head == NULL || head->next == NULL) return head;
    Node *rest = reverse({{0}});
    head->next->next = {{1}};
    head->next = {{2}};
    return {{3}};
}
int main(void) {
    printf("%d\n", reverse(NULL) == NULL);
    Node c = {3, NULL}, b = {2, &c}, a = {1, &b};
    Node *head = reverse(&a);
    assert(head == &c && a.next == NULL);
    for (Node *p = head; p; p = p->next) printf("%d%s", p->value, p->next ? " " : "\n");
    Node single = {9, NULL};
    assert(reverse(&single) == &single);
    printf("%d\n", single.value);
    return 0;
}`,['head->next','head','NULL','rest'],['head->next->next','head->next','0'],['Recurse on the smaller suffix, not the unchanged list.','The former second node must link back to head.','The old head becomes a tail with no next link.','Keep the new head returned by the suffix call.'],[['Empty input remains empty','1'],['Reversed three-node list','3 2 1'],['Singleton payload','9']]),
 lab(2,'Insert into a circular doubly linked ring','Add a fresh node before the head. The starter handles an empty ring. For a nonempty ring, head->prev is its tail; repair both directions before returning the new head.',String.raw`typedef struct Node { int value; struct Node *next, *prev; } Node;
Node *insertFront(Node *head, Node *fresh) {
    if (head == NULL) { fresh->next = fresh; fresh->prev = fresh; return fresh; }
    Node *tail = head->prev;
    fresh->next = {{0}};
    fresh->prev = {{1}};
    tail->next = {{2}};
    head->prev = fresh;
    return {{3}};
}
int main(void) {
    Node a = {1, NULL, NULL}, b = {2, NULL, NULL}, c = {3, NULL, NULL};
    Node *head = insertFront(NULL, &a);
    assert(a.next == &a && a.prev == &a);
    printf("%d\n", head->value);
    head = insertFront(head, &b);
    printf("%d %d\n", head->value, head->prev->value);
    head = insertFront(head, &c);
    Node *p = head;
    for (int i = 0; i < 3; i++) { assert(p->next->prev == p && p->prev->next == p); printf("%d%s", p->value, i == 2 ? "\n" : " "); p = p->next; }
    assert(p == head);
    return 0;
}`,['head','tail','fresh','fresh'],['NULL','tail->next','head->next'],['The new next link points to the original head.','The new previous link points to the retained old tail.','The tail must enter the new node, not skip it.','Return the fresh node after both neighbors are connected.'],[['First node','1'],['Two-node head and tail','2 1'],['Three-node forward lap','3 2 1']]),
 lab(3,'Count repeated halvings','Complete a loop that halves a positive integer until it is at most one. Count each division once. This shows logarithmic work without requiring floating-point logarithms.',String.raw`int halvings(int n) {
    int steps = 0;
    while ({{0}}) {
        n = {{1}};
        steps++;
    }
    return steps;
}
int main(void) {
    printf("%d\n", halvings(1));
    printf("%d\n", halvings(8));
    printf("%d\n", halvings(16));
    return 0;
}`,['n > 1','n / 2'],['n >= 1','n * 2','n - 1'],['Stop at one; dividing one repeatedly would reach zero unnecessarily.','Halve the input so each step reduces the remaining scale.'],[['Input one','0'],['Input eight','3'],['Input sixteen','4']]),
 lab(4,'Count a triangular loop','Fill the inclusive loop bounds and increments. The inner loop visits j=1 through i for each i=1 through n; n=0 should visit nothing.',String.raw`int visits(int n) {
    int count = 0;
    for (int i = 1; i {{0}} n; {{1}}) {
        for (int j = 1; j {{2}} i; {{3}}) count++;
    }
    return count;
}
int main(void) {
    printf("%d\n", visits(0));
    printf("%d\n", visits(3));
    printf("%d\n", visits(5));
    return 0;
}`,['<=','i++','<=','j++'],['<','i--','j--'],['Include outer index n.','Advance the outer index toward its limit.','Include the diagonal j=i.','Advance the inner index, not the outer one.'],[['No iterations','0'],['Three rows','6'],['Five rows','15']]),
 lab(5,'Implement a bounded stack','Here top is the number of live entries, initially zero. Check capacity before push, use the next free slot, and decrement top before reading a popped entry.',String.raw`enum { CAPACITY = 4 };
typedef struct { int data[CAPACITY]; int top; } Stack;
int push(Stack *s, int value) {
    if (s->top == {{0}}) return 0;
    s->data[s->top{{1}}] = value;
    return 1;
}
int pop(Stack *s, int *out) {
    if (s->top == 0) return 0;
    *out = s->data[{{2}}s->top];
    return 1;
}
int main(void) {
    Stack s = {0}; int out;
    printf("%d\n", pop(&s, &out));
    assert(push(&s, 7) && push(&s, 9));
    assert(pop(&s, &out)); printf("%d ", out);
    assert(pop(&s, &out)); printf("%d\n", out);
    for (int i = 1; i <= CAPACITY; i++) assert(push(&s, i));
    printf("%d\n", push(&s, 99));
    return 0;
}`,['CAPACITY','++','--'],['0','CAPACITY - 1','+'],['A count equal to allocated capacity means no free slot remains.','Postincrement uses the old next-free index, then increases the count.','Predecrement reaches the previous final live index before reading it.'],[['Empty pop succeeds?','0'],['LIFO removals','9 7'],['Push into a full stack succeeds?','0']]),
 lab(6,'Build a wraparound queue','Use a five-slot circular array with one reserved slot. Front names the next removal and rear the next insertion. Protect live items from overwrite and advance each endpoint modulo CAP.',String.raw`enum { CAP = 5 };
typedef struct { int data[CAP]; int front, rear; } Queue;
int enqueue(Queue *q, int value) {
    if ({{0}}) return 0;
    q->data[q->rear] = value;
    q->rear = {{1}};
    return 1;
}
int dequeue(Queue *q, int *out) {
    if (q->front == q->rear) return 0;
    *out = q->data[q->front];
    q->front = {{2}};
    return 1;
}
int main(void) {
    Queue q = {0}; int out;
    for (int i = 1; i <= 4; i++) assert(enqueue(&q, i));
    printf("%d\n", enqueue(&q, 99));
    assert(dequeue(&q, &out) && out == 1);
    assert(dequeue(&q, &out) && out == 2);
    assert(enqueue(&q, 5) && enqueue(&q, 6));
    for (int i = 0; i < 4; i++) { assert(dequeue(&q, &out)); printf("%d%s", out, i == 3 ? "\n" : " "); }
    printf("%d\n", dequeue(&q, &out));
    return 0;
}`,['(q->rear + 1) % CAP == q->front','(q->rear + 1) % CAP','(q->front + 1) % CAP'],['q->rear == q->front','q->rear + 1','q->front + 1'],['Full means the next rear would meet front in the reserved-slot convention.','Wrap the insertion index, including when it reaches CAP.','Wrap the removal index independently of rear.'],[['Full enqueue succeeds?','0'],['Order after wrapping','3 4 5 6'],['Empty dequeue succeeds?','0']]),
 lab(7,'Compute tree size and edge-height','Implement the recursive base cases and combination rules. An empty subtree has size zero and height minus one; a live node adds one, and height uses the larger child height.',String.raw`typedef struct Node { int key; struct Node *left, *right; } Node;
int size(Node *t) {
    if (t == NULL) return {{0}};
    return {{1}} + size(t->left) + size(t->right);
}
int height(Node *t) {
    if (t == NULL) return {{2}};
    int left = height(t->left), right = height(t->right);
    return 1 + {{3}};
}
int main(void) {
    printf("%d %d\n", size(NULL), height(NULL));
    Node a = {2, NULL, NULL}, b = {6, NULL, NULL}, root = {4, &a, &b};
    printf("%d %d\n", size(&root), height(&root));
    root.right = NULL; a.left = &b;
    printf("%d %d\n", size(&root), height(&root));
    return 0;
}`,['0','1','-1','(left > right ? left : right)'],['left + right','1','left'],['An absent child contributes no real node.','Count the current live node once.','Use empty height minus one so a leaf has height zero.','Choose the longest downward child path rather than adding heights.'],[['Empty tree size and height','0 -1'],['Balanced three-node tree','3 1'],['Three-node chain','3 2']]),
 lab(8,'Search and prune a BST range','Complete distinct-key BST search and inclusive range sum. Below the lower bound, skip the entire left subtree; above the upper bound, skip the entire right subtree.',String.raw`typedef struct Node { int key; struct Node *left, *right; } Node;
int contains(Node *t, int key) {
    while (t) {
        if (key == t->key) return 1;
        t = key < t->key ? {{0}} : {{1}};
    }
    return 0;
}
int rangeSum(Node *t, int low, int high) {
    if (!t) return 0;
    if (t->key < low) return rangeSum({{2}}, low, high);
    if (t->key > high) return rangeSum({{3}}, low, high);
    return t->key + rangeSum(t->left, low, high) + rangeSum(t->right, low, high);
}
int main(void) {
    Node a = {2, NULL, NULL}, b = {6, NULL, NULL}, c = {10, NULL, NULL}, d = {14, NULL, NULL};
    Node left = {4, &a, &b}, right = {12, &c, &d}, root = {8, &left, &right};
    printf("%d %d\n", contains(&root, 6), contains(&root, 5));
    printf("%d\n", rangeSum(&root, 6, 10));
    printf("%d\n", rangeSum(&root, 20, 30));
    return 0;
}`,['t->left','t->right','t->right','t->left'],['NULL','t','t->key'],['Smaller targets can only lie in the left subtree.','Larger targets can only lie in the right subtree.','When this key is too small, only the right side can still match.','When this key is too large, only the left side can still match.'],[['Present six and absent five','1 0'],['Inclusive range sum 6..10','24'],['Disjoint range sum','0']]),
 lab(9,'Perform an AVL right rotation','The supplied node y has a nonempty left child. Preserve the child’s middle subtree while rotating, then recompute the old root height before the new root height.',String.raw`typedef struct Node { int key, height; struct Node *left, *right; } Node;
int h(Node *t) { return t ? t->height : -1; }
void update(Node *t) { int a = h(t->left), b = h(t->right); t->height = 1 + (a > b ? a : b); }
Node *rotateRight(Node *y) {
    Node *x = {{0}};
    Node *middle = {{1}};
    x->right = {{2}};
    y->left = {{3}};
    update(y); update(x);
    return x;
}
int main(void) {
    Node ten = {10, 0, NULL, NULL}, twenty = {20, 1, &ten, NULL}, thirty = {30, 2, &twenty, NULL};
    Node *root = rotateRight(&thirty);
    assert(root->height == 1);
    printf("%d %d %d\n", root->key, root->left->key, root->right->key);
    Node a = {10, 0, NULL, NULL}, middle = {25, 0, NULL, NULL}, x = {20, 1, &a, &middle}, y = {30, 2, &x, NULL};
    root = rotateRight(&y);
    assert(y.left == &middle && root == &x);
    printf("%d\n", root->right->left->key);
    printf("%d\n", root->height);
    return 0;
}`,['y->left','x->right','y','middle'],['y->right','NULL','x->left','x'],['The left child becomes the new root.','Retain the child’s right subtree before changing links.','The old root becomes the new root’s right child.','The retained middle subtree becomes the old root’s left child.'],[['LL repair root and children','20 10 30'],['Preserved middle subtree key','25'],['Height with a middle subtree','2']]),
 lab(10,'Repair and build a min-heap','Finish smaller-child sift-down. Both child subtrees must already be heaps. The provided bottom-up loop satisfies that precondition by processing children before parents.',String.raw`void sift(int *a, int n, int i) {
    while (2 * i + 1 < n) {
        int child = 2 * i + 1;
        if (child + 1 < n && {{0}}) child++;
        if ({{1}}) break;
        int temp = a[i]; a[i] = a[child]; a[child] = temp;
        i = {{2}};
    }
}
void build(int *a, int n) { for (int i = n / 2 - 1; i >= 0; i--) sift(a, n, i); }
int main(void) {
    int a[] = {20,4,2,9,6,3,8}; sift(a, 7, 0);
    for (int i = 0; i < 7; i++) printf("%d%s", a[i], i == 6 ? "\n" : " ");
    int single[] = {4}; sift(single, 1, 0); printf("%d\n", single[0]);
    int b[] = {7,6,5,4,3,2,1}; build(b, 7);
    for (int i = 1; i < 7; i++) assert(b[(i-1)/2] <= b[i]);
    printf("%d\n", b[0]);
    return 0;
}`,['a[child + 1] < a[child]','a[i] <= a[child]','child'],['a[child + 1] > a[child]','a[i] >= a[child]','i + 1'],['Choose the smaller existing child for a min-heap.','Stop when the current key is already no larger than that child.','Continue where the displaced key moved, not at the next array index.'],[['Misplaced root repair','2 4 3 9 6 20 8'],['Singleton stays unchanged','4'],['Built heap minimum','1']]),
 lab(11,'Implement ascending heapsort','Use a max-heap to put successive maxima into the right-hand suffix. Fill the larger-child comparisons, first internal build index, and active repair size.',String.raw`void siftMax(int *a, int n, int i) {
    while (2*i+1 < n) {
        int child = 2*i+1;
        if (child+1 < n && {{0}}) child++;
        if ({{1}}) break;
        int temp=a[i]; a[i]=a[child]; a[child]=temp; i=child;
    }
}
void sort(int *a, int n) {
    for (int i={{2}}; i>=0; i--) siftMax(a,n,i);
    for (int end=n-1; end>0; end--) {
        int temp=a[0]; a[0]=a[end]; a[end]=temp;
        siftMax(a,{{3}},0);
    }
}
void show(int *a, int n) { sort(a,n); for (int i=0;i<n;i++) printf("%d%s",a[i],i==n-1?"\n":" "); }
int main(void) {
    int a[]={7,2,6,1,5,3}, b[]={3,2,1}, c[]={2,1,2};
    show(a,6); show(b,3); show(c,3);
    return 0;
}`,['a[child + 1] > a[child]','a[i] >= a[child]','n / 2 - 1','end'],['a[child + 1] < a[child]','a[i] <= a[child]','n - 1','n'],['Max-heap repair promotes the larger child.','Stop when the max-heap relation already holds.','Leaves need no build repair; start at the last internal index.','Exclude the just-finalized suffix entry from sift-down.'],[['Mixed values','1 2 3 5 6 7'],['Reverse order','1 2 3'],['Duplicate keys','1 2 2']]),
 lab(12,'Find keys across deletion tombstones','Complete bounded linear-probing lookup. Keys are nonnegative, EMPTY means never used, and DELETED is a tombstone. Continue past tombstones, but terminate on a never-used slot.',String.raw`enum { CAP=7, EMPTY=-1, DELETED=-2 };
int find(const int *table, int key) {
    int home=key%CAP;
    for (int i=0;i<CAP;i++) {
        int index=(home+i)%CAP;
        if (table[index]=={{0}}) return -1;
        if (table[index]=={{1}}) continue;
        if (table[index]==key) return {{2}};
    }
    return -1;
}
int main(void) {
    int table[]={EMPTY,EMPTY,EMPTY,DELETED,17,24,EMPTY};
    printf("%d %d %d\n",find(table,24),find(table,10),find(table,17));
    int full[]={1,2,3,4,5,6,7};
    printf("%d\n",find(full,14));
    printf("%d\n",find(full,7));
    return 0;
}`,['EMPTY','DELETED','index'],['DELETED','EMPTY','home','key'],['Only never-used empty safely ends an absent-key search.','A tombstone preserves the path to later displaced keys.','Return the actual matching slot rather than the home or payload.'],[['Search beyond a tombstone','5 -1 4'],['Full-table absent key','-1'],['Full-table present key','6']]),
 lab(13,'Calculate hash occupancy expectations','For n independent uniformly hashed keys and m positive buckets, compute expected empty buckets and unordered colliding pairs. Convert n to double before multiplying, and use floating-point division rather than integer truncation.',String.raw`double emptyBuckets(int n, int m) {
    double probability=1.0;
    for (int i=0;i<n;i++) probability *= {{0}};
    return {{1}};
}
double collidingPairs(int n, int m) {
    if (n < 2) return 0.0;
    return {{2}};
}
int main(void) {
    printf("%.4f %.4f\n",emptyBuckets(3,4),collidingPairs(3,4));
    printf("%.4f %.4f\n",emptyBuckets(0,4),collidingPairs(0,4));
    printf("%.4f %.4f\n",emptyBuckets(4,1),collidingPairs(4,1));
    return 0;
}`,['(1.0 - 1.0 / m)','m * probability','(double)n * (n - 1) / (2.0 * m)'],['(1 - 1 / m)','n * probability','n * (n - 1) / (2 * m)'],['Each key avoids one bucket with probability 1-1/m; floating-point constants preserve the fraction.','Sum the m empty-bucket indicator expectations.','Convert n to double before multiplication, then count unordered pairs and divide by the bucket count without truncation.'],[['Three keys, four buckets','1.6875 0.7500'],['No keys','4.0000 0.0000'],['All keys choose the sole bucket','0.0000 6.0000']]),
 lab(14,'Calculate multidimensional array offsets','Finish one stride-based function for row-major and column-major offsets. Subtract lower bounds for every axis. Dimensions are positive and the supplied small indices are in range.',String.raw`int offset(const int *dims, const int *index, const int *lower, int axes, int columnMajor) {
    int result=0, stride=1;
    for (int k=0;k<axes;k++) {
        int axis=columnMajor ? {{0}} : {{1}};
        result += (index[axis]-{{2}})*stride;
        stride *= {{3}};
    }
    return result;
}
int main(void) {
    int dims[]={2,3,4}, index[]={1,1,2}, zero[]={0,0,0};
    printf("%d %d\n",offset(dims,index,zero,3,0),offset(dims,index,zero,3,1));
    int d[]={3,4}, at[]={0,3}, low[]={-1,1};
    int row=offset(d,at,low,2,0);
    printf("%d %d\n",row,offset(d,at,low,2,1));
    printf("%d\n",1000+4*row);
    return 0;
}`,['k','axes - 1 - k','lower[axis]','dims[axis]'],['axes - k','0','index[axis]','dims[k]'],['Column-major starts with the first axis as fastest varying.','Row-major starts with the final axis and moves left.','Normalize against the matching lower bound.','Multiply the stride by the size of the axis just processed.'],[['Three-dimensional row and column offsets','18 15'],['Nonzero lower bounds','6 7'],['Row-major byte address','1024']]),
 lab(15,'Implement a queue with two stacks','Complete lazy transfer and dequeue. Move IN only when OUT is empty, preserving older OUT entries ahead of later arrivals. Counts name the next free stack slots.',String.raw`enum { CAP=8 };
typedef struct { int in[CAP], out[CAP], inCount, outCount; } Queue;
int enqueue(Queue *q,int key) {
    if (q->inCount+q->outCount==CAP) return 0;
    q->in[q->inCount++]=key; return 1;
}
void transfer(Queue *q) {
    while(q->inCount>0) q->out[q->outCount++]=q->in[{{0}}];
}
int dequeue(Queue *q,int *result) {
    if(q->outCount=={{1}}) transfer(q);
    if(q->outCount==0) return 0;
    *result=q->out[{{2}}]; return 1;
}
int main(void) {
    Queue q={0}; int value;
    assert(enqueue(&q,1)&&enqueue(&q,2)&&enqueue(&q,3));
    assert(dequeue(&q,&value)); printf("%d ",value);
    assert(enqueue(&q,4));
    for(int i=0;i<3;i++) { assert(dequeue(&q,&value)); printf("%d%s",value,i==2?"\n":" "); }
    printf("%d\n",dequeue(&q,&value));
    for(int i=0;i<CAP;i++) assert(enqueue(&q,i));
    printf("%d\n",enqueue(&q,99));
    return 0;
}`,['--q->inCount','0','--q->outCount'],['q->inCount++','1','q->outCount++'],['Pop the final live IN slot before pushing it onto OUT.','Transfer only when OUT has no older survivors.','Pop the final live OUT slot by decreasing its count first.'],[['Older items before a later arrival','1 2 3 4'],['Empty service succeeds?','0'],['Full queue accepts another key?','0']])
];
